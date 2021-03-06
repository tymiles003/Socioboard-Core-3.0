﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Domain.Socioboard.Interfaces.Services;
using Microsoft.AspNetCore.Hosting;
using Api.Socioboard.Model;
using Api.Socioboard.Repositories;
using Domain.Socioboard.Models;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Socioboard.Controllers
{
    [EnableCors("AllowAll")]
    [Route("api/[controller]")]
    public class GroupMemberController : Controller
    {
        public GroupMemberController(ILogger<UserController> logger, IEmailSender emailSender, IHostingEnvironment appEnv, Microsoft.Extensions.Options.IOptions<Helper.AppSettings> settings)
        {
            _logger = logger;
            _emailSender = emailSender;
            _appEnv = appEnv;
            _appSettings = settings.Value;
            _redisCache = new Helper.Cache(_appSettings.RedisConfiguration);
        }
        private readonly ILogger _logger;
        private readonly IEmailSender _emailSender;
        private readonly IHostingEnvironment _appEnv;
        private Helper.AppSettings _appSettings;
        private Helper.Cache _redisCache;

        [HttpPost("InviteGroupMembers")]
        public IActionResult InviteGroupMembers(long groupId,  string members)
        {
            List<Groupmembers> lstGrpMembers = new List<Groupmembers>();
            if (string.IsNullOrEmpty(members))
            {
                return BadRequest("members should not be null.");
            }
            else
            {
                string[] lstmem = members.Split(';');
                foreach(var item in lstmem)
                {
                    if (!string.IsNullOrEmpty(item))
                    {
                        Groupmembers grpMember = new Groupmembers();
                        string[] memData = item.Split(':');
                        grpMember.email = memData[2];
                        grpMember.firstName = memData[0];
                        grpMember.lastName = memData[1];
                        lstGrpMembers.Add(grpMember);

                    }
                }
            }


            DatabaseRepository dbr = new DatabaseRepository(_logger, _appEnv);
            Domain.Socioboard.Models.Groups grp = dbr.Find<Domain.Socioboard.Models.Groups>(t => t.Id == groupId).FirstOrDefault();
            if (grp == null)
            {
                return BadRequest("wrong group Id");
            }
            else if (grp.GroupName.Equals(Domain.Socioboard.Consatants.SocioboardConsts.DefaultGroupName))
            {
                return BadRequest("you can't invite members to default group.");
            }
            foreach (var member in lstGrpMembers)
            {
                User inMemUser = _redisCache.Get<User>(member.email.Trim());
                if (inMemUser == null)
                {
                    inMemUser = dbr.Find<User>(t => t.EmailId.Equals(member.email.Trim())).FirstOrDefault();
                }
                member.groupid = groupId;
                member.memberCode = Domain.Socioboard.Helpers.SBHelper.RandomString(15);
                member.isAdmin = false;
                member.memberStatus = Domain.Socioboard.Enum.GroupMemberStatus.MailSent;
                if (inMemUser != null)
                {
                    member.userId = inMemUser.Id;
                    member.profileImg = inMemUser.ProfilePicUrl;
                    //todo : code to add in user notification list.
                }
                Groupmembers temp = dbr.Find<Groupmembers>(t => t.groupid == groupId && t.email == member.email).FirstOrDefault();
                if (temp == null)
                {
                    dbr.Add<Groupmembers>(member);
                    _redisCache.Delete(Domain.Socioboard.Consatants.SocioboardConsts.CacheGroupMembers + groupId);
                    string path = System.IO.Path.Combine(_appEnv.WebRootPath, "wwwroot/views/mailtemplates/groupinvitation.html");
                    string html = System.IO.File.ReadAllText(path);
                    html = html.Replace("[FirstName]", member.firstName);
                    html = html.Replace("[[JoinLink]]", _appSettings.Domain + "/Home/GroupInvite?Token=" + member.memberCode + "&email=" + member.email);
                    _emailSender.SendMail("", "", member.email, "", "", "Socioboard Email conformation Link", html, _appSettings.ZohoMailUserName, _appSettings.ZohoMailPassword);
                }

            }

            return Ok();
        }


        [HttpGet("GetGroupMembers")]
        public IActionResult GetGroupMembers(long groupId)
        {
            DatabaseRepository dbr = new DatabaseRepository(_logger, _appEnv);
            return Ok(GroupMembersRepository.getGroupMembers(groupId, _redisCache, dbr));
        }


        public IActionResult ActivateGroupMember(string code, string email)
        {
            return Ok();
        }
    }
}

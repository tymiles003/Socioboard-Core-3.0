﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Socioboard.Extensions;
using Socioboard.Helpers;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Socioboard.Controllers
{
    public class GoogleManagerController : Controller
    {
        private Helpers.AppSettings _appSettings;
        private readonly ILogger _logger;

        public GoogleManagerController(Microsoft.Extensions.Options.IOptions<Helpers.AppSettings> settings, ILogger<FacebookManagerController> logger)
        {
            _appSettings = settings.Value;
            _logger = logger;
        }
        public async Task<ActionResult> Google(string code)
        {
            string googleLogin = HttpContext.Session.GetObjectFromJson<string>("googlepluslogin");
            string googleSocial = HttpContext.Session.GetObjectFromJson<string>("Google");
            if (googleLogin!= null && googleLogin.Equals("Google_Login"))
            {
                Domain.Socioboard.Models.User user = null;
                List<KeyValuePair<string, string>> Parameters = new List<KeyValuePair<string, string>>();
                Parameters.Add(new KeyValuePair<string, string>("code", code));
                HttpResponseMessage response = await WebApiReq.PostReq("/api/Google/GoogleLogin", Parameters, "", "",_appSettings.ApiDomain);
                if (response.IsSuccessStatusCode)
                {
                    try
                    {
                        user = await response.Content.ReadAsAsync<Domain.Socioboard.Models.User>();
                        HttpContext.Session.SetObjectAsJson("User", user);
                    }
                    catch (Exception ex)
                    {
                        try
                        {
                            TempData["Error"] = await response.Content.ReadAsStringAsync();
                            return RedirectToAction("Index", "Index");
                        }
                        catch (Exception exe) { }
                    }

                }
                return RedirectToAction("Index", "Home");

            }
            else if (googleSocial.Equals("Gplus_Account"))
            {
                HttpContext.Session.SetObjectAsJson("Google", null);
                return RedirectToAction("AddGoogleAcc", "GoogleManager", new { code = code });
            }
            return View();
        }


        public ActionResult getGoogleLoginUrl()
        {
            HttpContext.Session.SetObjectAsJson("googlepluslogin","Google_Login");
            string googleurl = "https://accounts.google.com/o/oauth2/auth?client_id=" + _appSettings.GoogleConsumerKey + "&redirect_uri=" + _appSettings.GoogleRedirectUri + "&scope=https://www.googleapis.com/auth/youtube+https://www.googleapis.com/auth/youtube.readonly+https://www.googleapis.com/auth/youtubepartner+https://www.googleapis.com/auth/youtubepartner-channel-audit+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/plus.me&response_type=code&access_type=offline";
            return Content(googleurl);
        }


        [HttpGet]
        public async Task<ActionResult> AddGoogleAccount()
        {
            int count = 0;
            Domain.Socioboard.Models.User user = HttpContext.Session.GetObjectFromJson<Domain.Socioboard.Models.User>("User");

            string profileCount = await ProfilesHelper.GetUserProfileCount(user.Id, _appSettings, _logger);
            try
            {
                count = Convert.ToInt32(profileCount);
            }
            catch (Exception ex)
            {
                TempData["Error"] = "Error while getting profile count.";
                return RedirectToAction("Index", "Home");
            }

            int MaxCount = Domain.Socioboard.Helpers.SBHelper.GetMaxProfileCount(user.AccountType);
            if (count >= MaxCount)
            {
                TempData["Error"] = "Max profile Count reached.";
                return RedirectToAction("Index", "Home");
            }
            else
            {
                HttpContext.Session.SetObjectAsJson("Google", "Gplus_Account");
                string googleurl = "https://accounts.google.com/o/oauth2/auth?client_id=" + _appSettings.GoogleConsumerKey + "&redirect_uri=" + _appSettings.GoogleRedirectUri + "&scope=https://www.googleapis.com/auth/youtube+https://www.googleapis.com/auth/youtube.readonly+https://www.googleapis.com/auth/youtubepartner+https://www.googleapis.com/auth/youtubepartner-channel-audit+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/plus.me&response_type=code&access_type=offline";
                return Redirect(googleurl);
            }

        }


        [HttpGet]
        public async Task<ActionResult> AddGoogleAcc(string code)
        {
            Domain.Socioboard.Models.User user = HttpContext.Session.GetObjectFromJson<Domain.Socioboard.Models.User>("User");
            string groupId = HttpContext.Session.GetObjectFromJson<string>("selectedGroupId");
            List<KeyValuePair<string, string>> Parameters = new List<KeyValuePair<string, string>>();
            Parameters.Add(new KeyValuePair<string, string>("code", code));
            Parameters.Add(new KeyValuePair<string, string>("groupId", groupId));
            Parameters.Add(new KeyValuePair<string, string>("userId", user.Id.ToString()));

            HttpResponseMessage response = await WebApiReq.PostReq("/api/Google/AddGoogleAccount", Parameters, "", "", _appSettings.ApiDomain);
            if (response.IsSuccessStatusCode)
            {
                TempData["Success"] = await response.Content.ReadAsStringAsync();
                return RedirectToAction("Index", "Home");
            }
            else
            {
                TempData["Error"] = "Error while hitting api.";
                return RedirectToAction("Index", "Home");
            }
        }

    }
}

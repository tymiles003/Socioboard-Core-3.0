﻿
namespace Socioboard.Helpers
{
    public class AppSettings
    {
        public string Domain { get; set; }
        public string ApiDomain { get; set; }


        //Start Facebook App Creds
        public string FacebookAuthUrl { get; set; }
        public string FacebookClientId { get; set; }
        public string FacebookClientSecretKey { get; set; }
        public string FacebookRedirectUrl { get; set; }

        //End Facebook App Creds

        //Start Google App Creds
        public string GoogleConsumerKey { get; set; }
        public string GoogleConsumerSecret { get; set; }
        public string GoogleApiKey { get; set; }
        public string GoogleRedirectUri { get; set; }
        //End Google App Creds

        //Twitter App Creds Start
        public string twitterConsumerKey { get; set; }
        public string twitterConsumerScreatKey { get; set; }
        public string twitterRedirectionUrl { get;  set; }
        //End Twitter App Creds 


    }
}

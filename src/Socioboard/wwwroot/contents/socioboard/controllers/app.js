/// <reference path="../../views/home/index.html" />
/// <reference path="../../views/home/index.html" />
'use strict';
/***
Socioboard AngularJS App Main Script
***/

/* Socioboard App */
var SocioboardApp = angular.module("SocioboardApp", [
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
    "lazy-scroll"
]);




SocioboardApp.constant("apiDomain", "http://localhost:6361");
SocioboardApp.constant("domain", "http://localhost:9821");
//Not Using codes Start
SocioboardApp.directive('myRepeatDropdownDirective', function () {
    return function (scope, element, attrs) {
        // if (scope.$last) {
        $('select').material_select();
        $('select').change(function () {
            var newValuesArr = [],
                select = $(this),
                ul = select.prev();
            ul.children('li').toArray().forEach(function (li, i) {
                if ($(li).hasClass('active')) {
                    newValuesArr.push(select.children('option').toArray()[i].value);
                }
            });
            select.val(newValuesArr);
        });
        //}
    };
})

//Not Using End

//codes to redirect all unauthorized calls to index page
SocioboardApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('SB401Detector');
});



// interceptor logic.
SocioboardApp.factory('SB401Detector', function ($location, $q) {
    return {
        responseError: function (response) {
            if (response.status === 401) {
                window.top.location = "../Index/Index";
                return $q.reject(response);
            }
            else {
                return $q.reject(response);
            }
        }
    };
});
//end codes to redirect all unauthorized calls to index page


/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
SocioboardApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
SocioboardApp.config(['$controllerProvider', function ($controllerProvider) {
    // this option might be handy for migrating old apps, but please don't use it
    // in new ones!
    $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
SocioboardApp.factory('settings', ['$rootScope', function ($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        layoutImgPath: '/contents/socioboard/images/',
        layoutCssPath: '/contents/socioboard/css/'
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
// SocioboardApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
//     $scope.$on('$viewContentLoaded', function() {
//         Socioboard.initComponents(); // init core components
//         //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
//     });
// }]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
SocioboardApp.controller('HeaderController', function ($rootScope, $scope, $http, domain) {
    $scope.$on('$includeContentLoaded', function () {

        $scope.changeGroup = function (groupId) {
            console.log($rootScope.groupId);
            $http.get(domain + '/Home/changeSelectdGroupId?groupId=' + groupId)
                          .then(function (response) {
                              if (response.data == "changed") {
                                  $rootScope.groupId = groupId;
                                  window.location.reload();
                              }
                          }, function (reason) {
                              $scope.error = reason.data;
                          });
        }
        //codes to load  groups start
        //$http.get(apiDomain + '/api/Groups/GetUserGroups?userId=' + $rootScope.user.Id)
        //              .then(function (response) {
        //                  $scope.groups = response.data;
        //              }, function (reason) {
        //                  $scope.error = reason.data;
        //              });
        // end codes to load groups
        //Layout.initHeader(); // init header
    });
});

/* Setup Layout Part - Sidebar */
/* Setup Layout Part - Sidebar */
SocioboardApp.controller('SidebarController', function ($rootScope, $scope, $http, apiDomain) {
    $scope.$on('$includeContentLoaded', function () {

        $scope.fbProfileFilter = function (item) {
            return item.ProfileType === 0 || item.ProfileType === 1;
        };

        ////codes to load  social profiles start
        //$http.get(apiDomain + '/api/GroupProfiles/GetGroupProfiles?groupId=' + $rootScope.groupId)
        //              .then(function (response) {

        //                  $rootScope.lstProfiles = response.data;
        //              }, function (reason) {
        //                  $scope.error = reason.data;
        //              });
        // end codes to load social profiles

        $('.collapsible').collapsible();
        // Layout.initSidebar(); // init sidebar





    });
});

/* Setup Layout Part - Sidebar */
// SocioboardApp.controller('PageHeadController', ['$scope', function($scope) {
//     $scope.$on('$includeContentLoaded', function() {        
//         Demo.init(); // init theme panel
//     });
// }]);

/* Setup Layout Part - Footer */
SocioboardApp.controller('FooterController', ['$scope', function ($scope) {
    $scope.$on('$includeContentLoaded', function () {
        // Layout.initFooter(); // init footer
    });
}]);

/* Setup Rounting For All Pages */
SocioboardApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/dashboard");

    $stateProvider
        // Dashboard
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "../contents/socioboard/views/dashboard/dashboard.html",
            data: { pageTitle: 'Dashboard', pageSubTitle: 'updated' },
            controller: "DashboardController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                             '../contents/socioboard/controllers/dashboardcontroller.js',
                             '../contents/socioboard/js/admin/plugins.js'
                        ]
                    });
                }]
            }
        })

         // smart inbox controller

        .state('smartinbox', {
            url: "/smartinbox",
            templateUrl: "../contents/socioboard/views/message/smartinbox.html",
            data: { pageTitle: 'Smart Inbox', pageSubTitle: 'updated' },
            controller: "SmartInboxController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                            '../contents/socioboard/controllers/smartinboxcontroller.js'
                        ]
                    });
                }]
            }
        })

         // inbox message controller
        .state('inboxmessage', {
            url: "/inboxmessage",
            templateUrl: "../contents/socioboard/views/message/inboxmessage.html",
            data: { pageTitle: 'Inbox Message', pageSubTitle: 'updated' },
            controller: "InboxMessageController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                            '../contents/socioboard/controllers/inboxmessagecontroller.js'
                        ]
                    });
                }]
            }
        })

          // schedule message controller
        .state('schedulemsg', {
            url: "/schedulemsg",
            templateUrl: "../contents/socioboard/views/publishing/schedulemsg.html",
            data: { pageTitle: 'Schedule Message', pageSubTitle: 'updated' },
            controller: "ScheduleMessageController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                            '../contents/socioboard/js/admin/moment.min.js',
                            '../contents/socioboard/controllers/schedulemsgcontroller.js'
                        ]
                    });
                }]
            }
        })

         // draft message controller
         .state('draft', {
             url: "/draft",
             templateUrl: "../contents/socioboard/views/publishing/draft.html",
             data: { pageTitle: 'Draft Message', pageSubTitle: 'updated' },
             controller: "DraftMessageController",

             resolve: {
                 deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         name: 'SocioboardApp',
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/js/admin/moment.min.js',
                             '../contents/socioboard/controllers/draftmsgcontroller.js'
                         ]
                     });
                 }]
             }
         })
          // socialqueue message controller
         .state('socioqueue', {
             url: "/socioqueue",
             templateUrl: "../contents/socioboard/views/publishing/socioqueue.html",
             data: { pageTitle: 'SocioQueue', pageSubTitle: 'updated' },
             controller: "SocioqueueController",

             resolve: {
                 deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         name: 'SocioboardApp',
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/js/admin/moment.min.js',
                             '../contents/socioboard/controllers/socioqueuecontroller.js'
                         ]
                     });
                 }]
             }
         })


         // socialqueue calendar controller
         .state('calendar', {
             url: "/calendar",
             templateUrl: "../contents/socioboard/views/publishing/calendar.html",
             data: { pageTitle: 'Calendar', pageSubTitle: 'updated' },
             controller: "CalendarController",

             resolve: {
                 deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         name: 'SocioboardApp',
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/js/admin/moment.min.js',
                             '../contents/socioboard/controllers/calendarcontroller.js'
                         ]
                     });
                 }]
             }
         })


        // discovery
        .state('discovery', {
            url: "/discovery.html",
            templateUrl: "../contents/socioboard/views/discovery/discovery.html",
            data: { pageTitle: 'Discovery', pageSubTitle: 'updated' },
            controller: "DiscoveryController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/js/admin/moment.min.js',
                            '../contents/socioboard/controllers/discoverycontroller.js'
                        ]
                    });
                }]
            }
        })

        // Smart Search
        .state('smartsearch', {
            url: "/smartsearch.html",
            templateUrl: "../contents/socioboard/views/discovery/smartsearch.html",
            data: { pageTitle: 'SmartSearch', pageSubTitle: 'updated' },
            controller: "DiscoveryController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                             'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyfTLfVpXa2nAkYREyFdst3bl0B6sYuGU',
                             '../contents/socioboard/js/admin/moment.min.js',
                            '../contents/socioboard/controllers/discoverycontroller.js'
                        ]
                    });
                }]
            }
        })

           // facebook feeds controller

         .state('facebookfeeds', {
             url: "/facebookfeeds/{profileId}",
             templateUrl: "../contents/socioboard/views/feeds/facebookfeeds.html",
             data: { pageTitle: 'Facebook Live feeds', pageSubTitle: 'updated' },
             controller: "FacebookFeedsController",

             resolve: {
                 deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         name: 'SocioboardApp',
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/controllers/facebookfeedscontroller.js'
                         ]
                     });
                 }]
             }
         })
        // AngularJS plugins


      .state('profilesettings', {
          url: "/profilesettings",
          templateUrl: "../contents/socioboard/views/settings/profilesettings.html",
          data: { pageTitle: 'Profile Settings', pageSubTitle: 'updated' },
          controller: "ProfileSettingController",

          resolve: {
              deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      name: 'SocioboardApp',
                      insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                      files: [
                          '../contents/socioboard/js/admin/plugins.js',
                          '../contents/socioboard/controllers/profilesettingcontroller.js'
                      ]
                  });
              }]
          }
      })

        // Profiles list
        .state('profiles', {
            url: "/profiles",
            templateUrl: "../contents/socioboard/views/dashboard/profiles.html",
            data: { pageTitle: 'Profile List', pageSubTitle: 'updated' },
            controller: "ProfilesController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [

                            '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/controllers/profilescontroller.js'

                        ]
                    });
                }]
            }
        })

     // twitter feeds controller
         .state('twitterfeeds', {
             url: "/twitterfeeds/{profileId}",
             templateUrl: "../contents/socioboard/views/feeds/twitterfeeds.html",
             data: { pageTitle: 'Twitter Live feeds', pageSubTitle: 'updated' },
             controller: "TwitterFeedsController",
             resolve: {
                 deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                     return $ocLazyLoad.load({
                         name: 'SocioboardApp',
                         insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                         files: [
                             '../contents/socioboard/js/admin/plugins.js',
                             '../contents/socioboard/controllers/twitterfeedscontroller.js'
                         ]
                     });
                 }]
             }
         })

        .state('groups', {
            url: "/groups",
            templateUrl: "../contents/socioboard/views/groups/groups.html",
            data: { pageTitle: 'Groups', pageSubTitle: 'updated' },
            controller: "GroupsController",

            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'SocioboardApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../contents/socioboard/js/admin/plugins.js',
                            '../contents/socioboard/controllers/groupscontroller.js'
                        ]
                    });
                }]
            }
        })

}]);

/* Init global settings and run the app */
SocioboardApp.run(["$rootScope", "settings", "$state", function ($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view



}]);
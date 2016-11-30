// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('PJAKApp', ['ionic', 'PJAKApp.controllers', 'PJAKApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
/*This function will allow urls to be passed from untrusted sources. i.e. YouTube.
it is recommended not to use this for live applicaitons*/
.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
})
/*sets the states for the applicaiton. homeUrl being the default*/
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('homeState', {
      url: "/homeUrl",
      templateUrl: 'templates/home.html'
  })

  .state('shoppingListState',{
     url: "/settingsUrl",
     templateUrl: "templates/settings.html"
   });
    $urlRouterProvider.otherwise('/homeUrl');
});

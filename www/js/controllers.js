angular.module('PJAKApp.controllers', [])
.controller('NasaController', function($scope, settingsService, NasaInfoService) {
  //sets default to "1" to initialize the project. So that on startup the project shows at least 1 image.
  settingsService.setDays("1");
  $scope.days = settingsService.getDays();

//$scope.on and ionicView.beforeEnter are built in to Angular to allow the controller to pick up settings
//from a service/controller that is in a previous state.
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.NasaInfoArr = [];
    var days = settingsService.getDays(); //get number of days
    var dates = NasaInfoService.getDate(days); //get dates depending no selected(1,7,14)
    var urlArr = NasaInfoService.getURLArr(dates);//get url array
    NasaInfoService.getPicOfDay(urlArr, responseOK, responseNOK); //calls getPicOfDay function from NasaInfoService

    function responseOK(responseData) {
      $scope.NasaInfoArr.push(responseData); //pushs responseData(object) into array to create an array of objects
      $scope.NasaInfoArr.sort(function (a,b) { //sorts array by date
        return new Date(b.date) - new Date(a.date);
      });
  }
    //if response from urls fails use this funciton to display error messages.
    function responseNOK(errorStatus, errorStatusText) {
      console.log(errorStatus + " " + errorStatusText);
    }
  });
})
/*SettingsCTRL, Sends number to the service.js depending on the users selection(1,7 or 14)*/
.controller('SettingsCTRL', function ($scope, settingsService){
  //"On Change" functions to send data to the service function setDays.
  $scope.noOfDays = function(days) {
    settingsService.setDays(days);
  }
  $scope.$on('days', function (){
    $scope.days = settingsService.getDays();
  });

/********Old Code**********
  var selectedValue = value.value;
  console.log(selectedValue);
  //var oneDay = 0;
  var oneDay = 0;
  for (var i=0; i<selectedValue; i++){
  var j=1;
  var dateObj = function(date){
  $scope.dateArr.push(this);
  var temp = new Date(date);
  this.date = temp.toISOString().split('T')[0];
}
new dateObj(new Date());
var today = new Date($scope.dateArr[i].date);
var yesterday = new Date(today - oneDay);
//$scope.nasaDate = yesterday.toISOString().split('T')[0];
oneDay = 1000 * 60 * 60 * 24;
//this.nasaDateArr.push(nasaDate);
//console.log(this.nasaDateArr);
console.log($scope.dateArr[i].date);
}*/

//SettingsService.setDate(2)
/*var days = value.value;
console.log(days);
//$scope.$on('$ionicView.beforeEnter', function () {
if (days === 1) {
SettingsService.setDate(++days);
$scope.data.dateMod = "1";
} else if (days === 7) {
SettingsService.setDate(++days);
$scope.data.dateMod = "7";
} else if (days === 14){
SettingsService.setDate(++days);
$scope.data.dateMod = "14";
}
//console.log($scope.data.clientSide);
//})
**********End*************/
})

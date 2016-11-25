angular.module('PJAKApp.controllers', [])
.controller('NasaController', function($scope, settingsService, NasaInfoService) {

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.days = settingsService.getDays();
    $scope.dates = NasaInfoService.getDate($scope.days);
    NasaInfoService.getPicOfDay($scope.dates);
  });
})

.controller('SettingsCTRL', function ($scope, settingsService){

  $scope.noOfDays = function(days) {
      settingsService.setDays(days);
    }
    $scope.$on('days', function (){
      $scope.days = settingsService.getDays();
    });
    /*var selectedValue = value.value;
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
    //})*/
  })

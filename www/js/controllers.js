angular.module('PJAKApp.controllers', [])
.controller('NasaController', function($scope, NasaInfoService, DateService) {
  $scope.nasaInfo = NasaInfoService.getPicOfDay(function(nasaInfo) {
    $scope.nasaInfo = nasaInfo;
  }, function(errorStatus, errorStatusText) {
    $scope.errorMsg = "ERROR: ";
    $scope.errorStatus = errorStatus;
    $scope.errorStatusText = errorStatusText;
  });
  $scope.showDate = function(date){
    return DateService.getDate(date);
  }
})

.controller('SettingsCTRL', function ($scope){
  $scope.clientSideList = [
    { text: "Today", value: "1" },
    { text: "Last 7 Days", value: "7" },
    { text: "Last 14 Days", value: "14" }
  ];

  $scope.data = {
    clientSide: '1'
  };
  $scope.noOfDays = function() {
    if ($scope.data.clientSide === "1") {
    console.log("1");
  } else if ($scope.data.clientSide === "7") {
    console.log("7");
  } else {
    console.log("14");
  }
}
})

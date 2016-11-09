angular.module('PJAKApp.controllers', [])
.controller('nasaCtrl', function($scope, nasaService) {
  $scope.hello = "";

  $scope.nasaService = function() {
    $scope.hello="hello"
  }
}

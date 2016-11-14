angular.module('PJAKApp.controllers', [])
.controller('nasaCtrl', function($scope, nasaService) {
  $scope.hello = "hello ";

  $scope.world = function (world) {
    return nasaService.world(world);
  }
})

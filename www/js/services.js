angular.module('PJAKApp.services', [])
.service('nasaService', function() {
  this.world = function(world) {
    var world = ++world;
    return world;
  }
})

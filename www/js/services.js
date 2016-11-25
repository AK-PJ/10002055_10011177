angular.module('PJAKApp.services', [])
.service('NasaInfoService', function($http, $rootScope) {
  this.getPicOfDay = function(dates) {
    console.log(dates);
    for (var i=0; i<dates.length; i++) {
      searchURL = "https://api.nasa.gov/planetary/apod?api_key=I8nPGWKTzor2AOHDZK2bVANlS1X6EiNMVHWGh4Xe&date=" + dates[i];
      console.log(searchURL);
    }
  }
  this.getDate = function(days){
    var dateArr = [];
    for (var i=0; i<days; i++){
      var date = new Date();
      if (i === 0) {
        var oneDay = 0;
      } else {
        var oneDay = (1000 * 60 * 60 *24) * (i);
      }

      var numDays = new Date(date - oneDay);
      var dates = numDays.toISOString().split('T')[0];
      dateArr.push(dates);
    }
    return dateArr;
  }
})

.service('settingsService', function($rootScope){

  this.setDays = function(days) {
    console.log(days);
    this.days = days;
    $rootScope.$broadcast('days');
  }
  this.getDays = function(){
    return this.days;
  }
})

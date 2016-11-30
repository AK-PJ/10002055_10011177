angular.module('PJAKApp.services', [])
.service('NasaInfoService', function($http, $rootScope) {
  //http function that gets the data for the applicaiton URL. It will return an array and send to controller
  //array size depends on funcitons below this one.
  //funNOK is returned if urls are broken or down. Or else the FunOK function passes the data it recieves to controller.
  this.getPicOfDay = function(dates, callbackOK, callbackNOK) {
    var searchURLArr = dates;
    for (var i=0; i<searchURLArr.length; i++) {
      $http.get(searchURLArr[i]).then(funOK, funNOK);

      function funOK(response) {
        callbackOK(response.data);
      };

      function funNOK(response) {
        callbackNOK(response.status, response.statusText);
      };
    }

  }
  //gets array from function below and depending on number of elements
  //creates 1, 7 of 14 searchURLS and passes them into an array
  //returns array
  this.getURLArr = function(dates) {
    var searchURLArr = [];
    for (var i=0; i<dates.length; i++) {
      searchURL = "https://api.nasa.gov/planetary/apod?api_key=I8nPGWKTzor2AOHDZK2bVANlS1X6EiNMVHWGh4Xe&date=" + dates[i];
      searchURLArr.push(searchURL);
    }
    return searchURLArr;
  }
  //get date function to get today, yesterday etc depending on the "days" setting.
  //returns a date array(either with 1, 7 or 14 elements) which is just an array of dates to be used in above function.
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
//settings service
.service('settingsService', function($rootScope){
//setDays function recieves call from settings controller sets
//days to relevant value and broadcasts the value.
  this.setDays = function(days) {
    this.days = days;
    $rootScope.$broadcast('days');
  }
  this.getDays = function(){
    return this.days;
  }
})

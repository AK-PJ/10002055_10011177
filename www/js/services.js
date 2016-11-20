angular.module('PJAKApp.services', [])
.service('NasaInfoService', function($http) {
  this.getPicOfDay = function(callbackOK, callbackNOK) {
    for (var i=0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var nasaMonth = d.getMonth() +1;
      var nasaDate = "" + d.getFullYear() + "";
      nasaDate += "-" + nasaMonth + "-";
      nasaDate += "" + d.getDate() + "";
      var searchURL = "https://api.nasa.gov/planetary/apod?api_key=I8nPGWKTzor2AOHDZK2bVANlS1X6EiNMVHWGh4Xe&date=" + nasaDate;
      console.log(nasaDate);
      $http.get(searchURL).then(funOK, funNOK);

      function funOK(response) {
        callbackOK(response.data);
      };

      function funNOK(response) {
        callbackNOK(response.status, response.statusText);
      };

    }
  }
})
.service('DateService', function(){
  this.getDate = function(date) {
    var newDate = new Date(date);
    //var dateMonth = date.getMonth();
    return newDate;
  }
})

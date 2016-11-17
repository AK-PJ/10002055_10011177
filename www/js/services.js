angular.module('PJAKApp.services', [])
.service('NasaInfoService', function($http) {
  this.getPicOfDay = function(callbackOK, callbackNOK) {
    var searchURL = "https://api.nasa.gov/planetary/apod?api_key=I8nPGWKTzor2AOHDZK2bVANlS1X6EiNMVHWGh4Xe";


    $http.get(searchURL).then(funOK, funNOK);

		function funOK(response) {
			callbackOK(response.data);
		};

		function funNOK(response) {
			callbackNOK(response.status, response.statusText);
		};

  }
})
.service('DateService', function(){
  this.getDate = function(date) {
		var newDate = new Date(date);
		//var dateMonth = date.getMonth();
    return newDate;
	}
})

myApp.factory('httpFactory', ['$http', function ($http) {
  return httpFactory = {

    httpGet: function (url) {
      return $http.get(url)
    }
  }
}])

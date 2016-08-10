'use strict'

angular.module('myApp.roadmap', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/roadmap', {
      templateUrl: 'roadmap/roadmap.html',
      controller: 'roadmapCtrl'
    })
  }])

  .controller('roadmapCtrl', ['$scope', 'httpFactory', '$window', function ($scope, httpFactory, $window) {
    var url = 'https://learning-ninja-api.herokuapp.com/levels/5'

    httpFactory.httpGet(url).then(function (response) {
      $scope.topics = response.data
    })

    $scope.showLocalStorage = function () {
      console.log($window.localStorage);
    }

    $scope.ninjaName = $window.localStorage.ninjaName
  }])

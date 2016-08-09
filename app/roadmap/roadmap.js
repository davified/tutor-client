'use strict'

angular.module('myApp.roadmap', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/roadmap', {
      templateUrl: 'roadmap/roadmap.html',
      controller: 'roadmapCtrl'
    })
  }])

  .controller('roadmapCtrl', ['$scope', 'httpFactory', function ($scope, httpFactory) {
    var url = 'https://learning-ninja-api.herokuapp.com/topics/6'

    httpFactory.httpGet(url).then(function (response) {
      $scope.topics = response.data
    })
  }])

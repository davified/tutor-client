'use strict'

angular.module('myApp.roadmap', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/roadmap', {
      templateUrl: 'roadmap/roadmap.html',
      controller: 'roadmapCtrl'
    })
  }])

  .controller('roadmapCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('https://learning-ninja-api.herokuapp.com/topics/6').then(function (response) {
      $scope.topics = response.data
    })
  }])

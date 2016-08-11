'use strict'

angular.module('myApp.roadmap', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/roadmap', {
      templateUrl: 'roadmap/roadmap.html',
      controller: 'roadmapCtrl'
    })
  }])

  .controller('roadmapCtrl', ['$scope', 'httpFactory', '$window', '$mdSidenav', function ($scope, httpFactory, $window, $mdSidenav) {
    var url = 'https://learning-ninja-api.herokuapp.com/levels/' + $window.localStorage.level

    httpFactory.httpGet(url).then(function (response) {
      $scope.topics = response.data
    })

    $scope.ninjaName = $window.localStorage.ninjaName

    $scope.toggleList = function () {
      $mdSidenav('left').toggle()
    }
  }])

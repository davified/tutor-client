'use strict'

angular.module('myApp.exercise', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/exercise', {
      templateUrl: 'exercise/exercise.html',
      controller: 'exerciseCtrl'
    })
  }])

  .controller('exerciseCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('https://learning-ninja-api.herokuapp.com/exercises').then(function (response) {
      $scope.questions = response.data.questions
    })
  }])

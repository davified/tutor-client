angular.module('myApp.material', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/material', {
      templateUrl: 'material/material.html',
      controller: 'materialCtrl'
    })
  }])

  .controller('materialCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  }])

angular.module('myApp.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'loginCtrl'
    })
  }])

  .controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.formData = {
      email: $scope.email,
      password: $scope.password
    }

    $scope.login = function () {
      $http.post('https://learning-ninja-api.herokuapp.com/signin/', $scope.formData).then(function successCallback (response) {
        console.log('sign up success!', response)
      }, function errorCallback (response) {
        console.log('sign up failed!', response)
      })
    }
  }])

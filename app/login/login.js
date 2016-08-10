angular.module('myApp.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'loginCtrl'
    })
  }])

  .controller('loginCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.formData = {
      email: $scope.email,
      password: $scope.password
    }

    $scope.login = function () {
      $http.post('http://localhost:3000/signin/', $scope.formData).then(function successCallback (response) {
        console.log('login success!', response)
        $window.location.href = '/#!/material'
        $window.localStorage.email = response.data.user.email
        $window.localStorage.auth_token = response.data.user.auth_token
        $window.localStorage.user_id = response.data.user._id
      }, function errorCallback (response) {
        console.log('login failed!', response)
      })
    }

    $scope.signup = function () {
      $http.post('http://localhost:3000/signup/', $scope.formData).then(function successCallback (response) {
        console.log('sign up success!', response)
        $window.location.href = '/#!/material'
        $window.localStorage.email = response.data.user.email
        $window.localStorage.auth_token = response.data.user.auth_token
      }, function errorCallback (response) {
        console.log('sign up failed!', response)
      })
    }
  }])

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
      $http.post('https://learning-ninja-api.herokuapp.com/signin/', $scope.formData).then(function successCallback (response) {
        console.log('login success!', response)
        $window.location.href = '/#!/material'
        $window.localStorage.email = response.data.user.email
        $window.localStorage.auth_token = response.data.user.auth_token
        $window.localStorage.user_id = response.data.user._id
        $window.localStorage.level = response.data.user.level
        $window.localStorage.ninjaName = response.data.user.ninjaName
        location.reload()
      }, function errorCallback (response) {
        console.log('login failed!', response)
      })
    }

    $scope.signup = function () {
      $http.post('https://learning-ninja-api.herokuapp.com/signup/', $scope.formData).then(function successCallback (response) {
        console.log('sign up success!', response)
        $window.location.href = '/#!/material'
        $window.localStorage.email = response.data.user.email
        $window.localStorage.auth_token = response.data.user.auth_token
      }, function errorCallback (response) {
        console.log('sign up failed!', response)
      })
    }
  }])

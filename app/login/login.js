angular.module('myApp.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'loginCtrl'
    })
  }])

  .controller('loginCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    if ($window.localStorage.auth_token) $window.location.href = '/#!/roadmap'
    $scope.formData = {
      email: $scope.email,
      password: $scope.password
    }

    $scope.login = function () {
      $http.post('https://learning-ninja-api.herokuapp.com/signin/', $scope.formData).then(function successCallback (response) {
        console.log('login success!', response)
        if (response.data.user.ninjaName) {
          $window.location.href = '/#!/roadmap'
        } else {
          $window.location.href = '/#!/material'
        }
        $window.localStorage.email = response.data.user.email
        $window.localStorage.auth_token = response.data.user.auth_token
        $window.localStorage.user_id = response.data.user._id
        $window.localStorage.level = response.data.user.level
        $window.localStorage.ninjaName = response.data.user.ninjaName
        $window.localStorage.firstName = response.data.user.firstName
        $window.localStorage.lastName = response.data.user.lastName
        $window.localStorage.school = response.data.user.school
        $window.localStorage.address = response.data.user.address
        $window.localStorage.postalCode = response.data.user.postalCode
        $window.localStorage.birthday = response.data.user.birthday
        $window.localStorage.level = response.data.user.level
        $window.localStorage.aboutMe = response.data.user.aboutMe
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

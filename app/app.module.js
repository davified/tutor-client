'use strict'

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.roadmap',
  'myApp.exercise',
  'myApp.exerciseOne',
  'myApp.login',
  'myApp.version',
  'ngMaterial',
  'myApp.material',
  'myApp.dashboard',
  'chart.js',

  // components
  'popup',
  'materialForm'
]).controller('AppCtrl', ['$scope', '$window', function ($scope, $window) {
  $scope.isOpen = false
  $scope.demo = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  }

  if ($window.localStorage.auth_token) {
    $scope.userIsLoggedIn = true
  }

  $scope.logout = function () {
    if ($window.localStorage.level) $window.localStorage.removeItem('level')
    if ($window.localStorage.ninjaName) $window.localStorage.removeItem('ninjaName')
    if ($window.localStorage.firstName) $window.localStorage.removeItem('firstName')
    if ($window.localStorage.lastName) $window.localStorage.removeItem('lastName')
    if ($window.localStorage.school) $window.localStorage.removeItem('school')
    if ($window.localStorage.address) $window.localStorage.removeItem('address ')
    if ($window.localStorage.postalCode) $window.localStorage.removeItem('postalCode')
    if ($window.localStorage.birthday) $window.localStorage.removeItem('birthday')
    if ($window.localStorage.aboutMe) $window.localStorage.removeItem('aboutMe ')
    if ($window.localStorage.user_id) $window.localStorage.removeItem('user_id')
    if ($window.localStorage.auth_token) $window.localStorage.removeItem('auth_token')
    if ($window.localStorage.email) $window.localStorage.removeItem('email')
    $window.location.href = '/#!/login'
    location.reload()
  }
}])

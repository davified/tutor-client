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

  // components
  'popup',
  'materialForm'
]).controller('AppCtrl', ['$scope', '$window', function($scope, $window) {
      $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };

      if($window.localStorage.auth_token) {
        $scope.userIsLoggedIn = true
      }

      $scope.logout = function () {
        $window.localStorage.removeItem('auth_token')
        $window.localStorage.removeItem('email')
        $window.localStorage.removeItem('user_id')
        $window.localStorage.removeItem('level')
        $window.localStorage.removeItem('ninjaName')
        console.log('logout works');
        location.reload()
      }
    }]);

// myApp.factory('getQuestions', function() {
//
// })

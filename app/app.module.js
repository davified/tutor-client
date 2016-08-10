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
])

// myApp.factory('getQuestions', function() {
//
// })

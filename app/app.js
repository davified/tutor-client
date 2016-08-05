'use strict'

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.roadmap',
  'myApp.exercise',
  'myApp.version',
  // 'ngAnimate',
  // 'ngTouch',
  // 'ui.bootstrap',
  'ngMaterial',
  'myApp.material'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!')

  $routeProvider.otherwise({redirectTo: '/roadmap'})
}])

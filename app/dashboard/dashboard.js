angular.module('myApp.dashboard', ['ngRoute', 'chart.js'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    })
  }])

  .controller('dashboardCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    $scope.series = ['Me', 'National average']
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ]
    $scope.onClick = function (points, evt) {
      console.log(points, evt)
    }
    $scope.datasetOverride = { yAxisID: 'y-axis-1' }
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }
        ]
      }
    }
  }])

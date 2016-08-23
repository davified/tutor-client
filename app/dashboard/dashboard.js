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
// whole numbers
    $scope.labels2 = ["Numbers up to 10 million", "Four operations", "Order of operations"];
    $scope.data2 = [300, 500, 100];

// fractions
    $scope.labels3 = ["four operations on fractions", "dividing fractions"];
    $scope.data3 = [500 , 200];

// geometry
    $scope.labels4 = ["Geometrical figures", "Nets", "Measurements"];
    $scope.data4 = [300, 800, 20];

// measurement
    $scope.labels5 = ["Length, mass and volume", "Area of triangle", "Parallelogram, rhombus and trapezium", "Volume of cube and cuboid"];
    $scope.data5 = [800, 50, 300, 200];
}])

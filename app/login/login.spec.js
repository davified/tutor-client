'use strict'

describe('myApp.login module', function () {
  beforeEach(module('myApp.login'))

  var scope, $controller, createController

  beforeEach(inject(function ($rootScope, $controller) {
    $controller = _$controller_
    $scope = $rootScope.new()
    // $window = _$window_

    createController = function() {
      return $controller('loginCtrl', {
        $scope: scope
      })
    }
  }))

  describe('$scope.login()', function () {
    it('should allow existing user to log in', inject(function ($controller) {
      // spec body
      // var loginCtrl = $controller('loginCtrl')
      var loginCtrl = createController();
      expect(loginCtrl).toBeDefined()
    }))
  })
})

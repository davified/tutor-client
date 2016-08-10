'use strict'

angular.module('materialForm', ['ngMaterial', 'ngMessages'])
  .component('materialForm', {
    templateUrl: 'components/material-form/material-form.template.html',
    controller: ['$mdMedia', '$http', '$window', function MaterialFormCtrl ($mdMedia, $http, $window) {
      var self = this
      self.$mdMedia = $mdMedia
      self.user = {
        firstName: '',
        lastName: '',
        ninjaName: '',
        email: $window.localStorage.email,
        school: '',
        address: '',
        postalCode: '',
        birthday: '', // date
        level: '',
        aboutMe: ''
      },
      self.levels = [
        '',
        'Primary 1',
        'Primary 2',
        'Primary 3',
        'Primary 4',
        'Primary 5',
        'Primary 6',
        'Secondary 1',
        'Secondary 2',
        'Secondary 3',
        'Secondary 4',
        'Secondary 5'
      ]

      self.submit = function () {
        $http.put('http://localhost:3000/edit-user', self.user)
        $window.location.href = '/#!/roadmap'
        $window.localStorage.level = self.levels.indexOf(self.user.level)
        $window.localStorage.ninjaName = self.user.ninjaName
      }

      self.signUp = function () {
        $http.post('https://learning-ninja-api.herokuapp.com/signup/', self.user).then(function successCallback (response) {
          console.log('sign up success!', response)
          $window.location.href = '/#!/roadmap'
        }, function errorCallback (response) {
          console.log('sign up failed!', response)
        })
      }
    }]
  })

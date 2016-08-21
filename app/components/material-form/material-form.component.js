'use strict'

angular.module('materialForm', ['ngMaterial', 'ngMessages'])
  .component('materialForm', {
    templateUrl: 'components/material-form/material-form.template.html',
    controller: ['$http', '$window', function MaterialFormCtrl ($http, $window) {
      var self = this
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

      if ($window.localStorage.ninjaName === '') {
        self.user = {
          firstName: '',
          lastName: '',
          ninjaName: '',
          email: $window.localStorage.email,
          school: '',
          address: '',
          postalCode: '',
          birthday: new Date('1 January, 1997'), // date
          level: '',
          aboutMe: ''
        }} else {
          self.user = {
            firstName: $window.localStorage.firstName,
            lastName: $window.localStorage.lastName,
            ninjaName: $window.localStorage.ninjaName,
            email: $window.localStorage.email,
            school: $window.localStorage.school,
            address: $window.localStorage.address,
            postalCode: $window.localStorage.postalCode,
            birthday: $window.localStorage.birthday, // date
            level: self.levels[$window.localStorage.level],
            aboutMe: $window.localStorage.aboutMe
          }
        }

      self.submit = function () {
        $http.put('https://learning-ninja-api.herokuapp.com/edit-user', self.user)
        $window.location.href = '/#!/roadmap'
        $window.localStorage.level = self.levels.indexOf(self.user.level)
        $window.localStorage.ninjaName = self.user.ninjaName
        $window.localStorage.firstName = self.user.firstName
        $window.localStorage.lastName = self.user.lastName
        $window.localStorage.school = self.user.school
        $window.localStorage.address = self.user.address
        $window.localStorage.postalCode = self.user.postalCode
        $window.localStorage.birthday = self.user.birthday
        $window.localStorage.aboutMe = self.user.aboutMe
      }

      self.signUp = function () {
        $http.post('https://learning-ninja-api.herokuapp.com/signup/', self.user).then(function successCallback (response) {
          console.log('sign up success!', response)
          $window.location.href = '/#!/roadmap'
          $window.location.reload()

        }, function errorCallback (response) {
          console.log('sign up failed!', response)
        })
      }
    }]
  })

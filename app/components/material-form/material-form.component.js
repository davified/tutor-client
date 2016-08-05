'use strict'

angular.module('materialForm', ['ngMaterial', 'ngMessages'])
  .component('materialForm', {
    templateUrl: 'components/material-form/material-form.template.html',
    controller: [ function MaterialFormCtrl () {
      var self = this
      self.user = {
        firstName: '',
        lastName: '',
        ninjaName: '',
        school: '',
        password: '',
        address: '',
        postalCode: '',
        birthday: '', // date
        level: '',
        aboutMe: ''
      },
      self.levels = [
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
    }]
  })

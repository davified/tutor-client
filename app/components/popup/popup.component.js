'use strict'

angular.module('popup', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .component('popup', {
    templateUrl: 'components/popup/popup.template.html',
    controller: ['$mdDialog', function PopupCtrl ($mdDialog) {
      var self = this
      self.openFromLeft = function openFromLeft () {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Opening from the left')
            .textContent('Closing to the right!')
            .ariaLabel('Left to right demo')
            .ok('Nice!')
            // You can specify either sting with query selector
            .openFrom('#left')
            // or an element
            .closeTo(angular.element(document.querySelector('#right')))
        )
      }

      self.openOffscreen = function openFromLeft() {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Opening from offscreen')
            .textContent('Closing to offscreen')
            .ariaLabel('Offscreen Demo')
            .ok('Amazing!')
            // Or you can specify the rect to do the transition from
            .openFrom({
              top: -50,
              width: 30,
              height: 80
            })
            .closeTo({
              left: 1500
            })
        )
      }
    }]
  })

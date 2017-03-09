import angular from 'angular'

const mdlUpgradeDirective = /* @ngInject */ ($window, $timeout) => ({
  restrict: 'A',
  compile: () => ({
    post: (scope, element) => {
      const { componentHandler } = $window

      $timeout(() => {
        componentHandler.upgradeElements(element[0])
      }, 0)
    }
  })
})

export default angular
  .module('components.mdlUpgrade', [])
  .directive('mdlUpgrade', mdlUpgradeDirective)
  .name

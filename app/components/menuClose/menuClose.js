import angular from 'angular'

const menuCloseDirective = () => ({
  restrict: 'AC',
  link (scope, element) {
    element.bind('click', () => {
      setTimeout(() => {
        const d = document.querySelector('.mdl-layout')

        d.MaterialLayout.toggleDrawer()
      }, 100)
    })
  }
})

export default angular
  .module('components.menuClose', [])
  .directive('menuClose', menuCloseDirective)
  .name

import angular from 'angular'

import template from './homePage.html'
import './homePage.css'

const homePageComponent = {
  template
}

export default angular
  .module('components.homePage', [])
  .component('homePage', homePageComponent)
  .name

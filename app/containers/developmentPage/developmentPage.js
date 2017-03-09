import angular from 'angular'

import template from './developmentPage.html'
import './developmentPage.css'

const developmentPageComponent = {
  template
}

export default angular
  .module('containers.developmentPage', [])
  .component('developmentPage', developmentPageComponent)
  .name

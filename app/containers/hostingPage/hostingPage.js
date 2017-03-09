import angular from 'angular'

import template from './hostingPage.html'
import './hostingPage.css'

const hostingPageComponent = {
  template
}

export default angular
  .module('containers.hostingPage', [])
  .component('hostingPage', hostingPageComponent)
  .name

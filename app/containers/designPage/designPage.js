import angular from 'angular'

import template from './designPage.html'
import './designPage.css'

const designPageComponent = {
  template
}

export default angular
  .module('components.designPage', [])
  .component('designPage', designPageComponent)
  .name

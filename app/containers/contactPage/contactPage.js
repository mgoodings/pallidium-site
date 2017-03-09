import angular from 'angular'
import mdlUpgrade from 'app/components/mdlUpgrade/mdlUpgrade'

import template from './contactPage.html'
import './contactPage.css'

class ContractPageCtrl {
  constructor ($scope, $http, $httpParamSerializerJQLike) {
    'ngInject'

    this._scope = $scope
    this._http = $http
    this._serializer = $httpParamSerializerJQLike
  }

  $onInit () {
    this.data = {}
  }

  submit (form) {
    if (!form || form.$invalid || this.submitting) {
      return
    }

    this.submitting = true

    this._http({
      method: 'POST',
      url: 'https://formspree.io/sales@pallidium.com.au',
      data: this._serializer(this.data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(() => {
      this.submitted = true
    })
  }
}

const contactPageComponent = {
  template,
  controller: ContractPageCtrl
}

export default angular
  .module('components.contactPage', [
    mdlUpgrade
  ])
  .component('contactPage', contactPageComponent)
  .name

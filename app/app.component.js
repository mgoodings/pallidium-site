import template from './app.html'

class AppCtrl {
  constructor ($state) {
    'ngInject'

    this._state = $state
  }

  $onInit () {
    this.items = [ {
      sref: 'app.hosting',
      text: 'Hosting',
      icon: 'fa fa-globe'
    }, {
      sref: 'app.design',
      text: 'Design',
      icon: 'fa fa-pencil'
    }, {
      sref: 'app.development',
      text: 'Develop',
      icon: 'fa fa-code'
    }, {
      sref: 'app.contact',
      text: 'Contact',
      icon: 'fa fa-envelope-o'
    } ]
  }

  get currentData () {
    const { current } = this._state

    return current && current.data
  }

  get theme () {
    return this.currentData && this.currentData.theme
  }

  get themeLogo () {
    return this.currentData && this.currentData.themeLogo
  }
}

const appComponent = {
  template,
  controller: AppCtrl
}

export default appComponent

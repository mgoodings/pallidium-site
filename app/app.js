import 'animate.css'
import 'font-awesome/css/font-awesome.css'
import 'app/styles/mdl.scss'

import 'material-design-lite/material'
import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngUiRouter from 'angular-ui-router'

import homePage from 'app/containers/homePage/homePage'
import hostingPage from 'app/containers/hostingPage/hostingPage'
import designPage from 'app/containers/designPage/designPage'
import developmentPage from 'app/containers/developmentPage/developmentPage'
import contactPage from 'app/containers/contactPage/contactPage'

import menuClose from 'app/components/menuClose/menuClose'

import appComponent from './app.component'
import appConfig from './app.config'
import './app.css'

export default angular
  .module('app', [
    ngAnimate,
    ngUiRouter,
    menuClose,
    homePage,
    hostingPage,
    designPage,
    developmentPage,
    contactPage
  ])
  .component('app', appComponent)
  .config(appConfig)

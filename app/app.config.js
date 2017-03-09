const appConfig = ($locationProvider, $stateProvider, $urlRouterProvider) => {
  'ngInject'

  $locationProvider.html5Mode(true).hashPrefix('!')

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      component: 'app',
      data: {
        theme: 'default',
        themeLogo: 'logo-graphic'
      }
    })
    .state('app.home', {
      url: '',
      component: 'homePage',
      data: {
        theme: 'home',
        themeLogo: 'logo-graphic-dark'
      }
    })
    .state('app.hosting', {
      url: 'hosting',
      component: 'hostingPage',
      data: {
        theme: 'palette-1',
        themeLogo: 'logo-graphic-dark'
      }
    })
    .state('app.design', {
      url: 'design',
      component: 'designPage',
      data: {
        theme: 'palette-2',
        themeLogo: 'logo-graphic-dark'
      }
    })
    .state('app.development', {
      url: 'development',
      component: 'developmentPage',
      data: {
        theme: 'palette-3',
        themeLogo: 'logo-graphic-dark'
      }
    })
    .state('app.contact', {
      url: 'contact',
      component: 'contactPage'
    })

  $urlRouterProvider.otherwise('/')
}

export default appConfig

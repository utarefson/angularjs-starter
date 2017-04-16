angular
  .module('appModule')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('StartPage', {
        url: '/',
        redirectTo: 'LoginPage'
    })
    .state('LoginPage', {
        parent: 'StartPage',
        url: 'login',
        component: 'loginComponent'
    })
}

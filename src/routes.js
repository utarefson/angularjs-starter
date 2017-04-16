angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('LoginPage', {
        url: '/login',
        component: 'loginComponent'
    })
    .state('CategoryPage', {
        url: '/categories',
        templateUrl: 'app/category/category.html',
        controller: 'categoryController',
        controllerAs: 'categoryX'
    });
}

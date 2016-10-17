angular.module("lbApp", ["ui.router"])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        });
      });

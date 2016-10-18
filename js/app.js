angular.module("lbApp", ["ui.router", "angular.filter"])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        });
      });

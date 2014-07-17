// define module
var buttonModule = angular.module('buttonModule', ['ui.router', 'ui.bootstrap']);

// config router
buttonModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('button', {
        url: "/button",
        templateUrl: "modules/button/templates/button.html"
      });
  }
]);
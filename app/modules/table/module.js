// define module
var tableModule = angular.module('tableModule', ['ui.router', 'ui.bootstrap']);

// config router
tableModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('table', {
        url: "/table",
        templateUrl: "modules/table/templates/table.html"
      });
  }
]);
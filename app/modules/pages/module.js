// define module
var pagesModule = angular.module('pagesModule', ['ui.router', 'ui.bootstrap']);

// config router
pagesModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('pages', {
        url: "/pages",
        templateUrl: "modules/pages/templates/pages.html"
      });
  }
]);
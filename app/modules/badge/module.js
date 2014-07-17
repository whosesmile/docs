// define module
var badgeModule = angular.module('badgeModule', ['ui.router', 'ui.bootstrap']);

// config router
badgeModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('badge', {
        url: "/badge",
        templateUrl: "modules/badge/templates/badge.html"
      });
  }
]);
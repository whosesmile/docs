// define module
var helperModule = angular.module('helperModule', ['ui.router', 'ui.bootstrap']);

// config router
helperModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('helper', {
        url: "/helper",
        templateUrl: "modules/helper/templates/helper.html"
      });
  }
]);
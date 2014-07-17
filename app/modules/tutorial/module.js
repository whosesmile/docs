// define module
var tutorialModule = angular.module('tutorialModule', ['ui.router', 'ui.bootstrap']);

// config router
tutorialModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "modules/tutorial/templates/tutorial.html"
      });
  }
]);
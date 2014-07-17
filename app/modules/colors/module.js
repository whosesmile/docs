// define module
var colorsModule = angular.module('colorsModule', ['ui.router', 'ui.bootstrap']);

// config router
colorsModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('colors', {
        url: "/colors",
        templateUrl: "modules/colors/templates/colors.html"
      });
  }
]);
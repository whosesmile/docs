/* global serialize:true */

// Initialize
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'templates', 'tutorialModule', 'buttonModule', 'colorsModule', 'tableModule', 'pagesModule', 'badgeModule', 'helperModule']);

// HTTP拦截器
app.config(['$httpProvider',
  function ($httpProvider) {
    // POST method use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // Override transformRequest to serialize form data like jquery
    $httpProvider.defaults.transformRequest = [

      function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? serialize(data) : data;
      }
    ];

    // Add interceptor
    $httpProvider.interceptors.push(['$q',
      function ($q) {
        return {
          request: function (config) {
            return $q.when(config);
          },
          response: function (response) {
            if (response.config.parsing !== false && response.status === 200 && angular.isObject(response.data)) {
              var res = response.data;
              // 兼容旧数据格式
              res.data = res.data || {};
              res.data.message = res.data.message || res.message;
              return [0, 200].indexOf(res.code) !== -1 ? res.data : $q.reject(res.data);
            }
            return $q.when(response);
          },
          requestError: function (rejection) {
            return $q.reject(rejection);
          },
          responseError: function (rejection) {
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);

app.run(['$window', '$document', '$rootScope',
  function ($window, $document, $rootScope) {
    angular.element($window).on('scroll', function (e) {
      $rootScope.offsetY = ($document.scrollTop());
      $rootScope.$digest();
    });
}]);

// bootstrap
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
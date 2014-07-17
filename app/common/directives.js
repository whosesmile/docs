/**
 * 自动聚焦...
 */
app.directive('csFocus', ['$timeout',
  function ($timeout) {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, elem) {
        var times = 0;
        (function focus() {
          if (elem.is(':visible')) {
            elem.focus();
          }
          else if (times++ < 1) {
            $timeout(focus, 200);
          }
        }());
      }
    };
  }
]);

/**
 * 动态切换Input的type为Number
 * placeholder text for an input type="number" does not work in mobile webkit
 */
app.directive('csNumber', function () {
  return {
    restrict: 'A',
    replace: false,
    link: function (scope, elem) {
      elem.on('focus', function () {
        this.type = 'number';
      }).on('blur', function () {
        this.type = 'text';
      });
    }
  };
});
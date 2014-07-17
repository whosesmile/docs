angular.module('templates', ['modules/badge/templates/badge.html', 'modules/button/templates/button.html', 'modules/colors/templates/colors.html', 'modules/helper/templates/helper.html', 'modules/pages/templates/pages.html', 'modules/table/templates/table.html', 'modules/tutorial/templates/tutorial.html']);

angular.module("modules/badge/templates/badge.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/badge/templates/badge.html",
    "<div id=\"badge\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>徽章</h2>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <span class=\"badge\">1</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/button/templates/button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/button/templates/button.html",
    "<div id=\"button\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>按钮</h2>\n" +
    "  </div>\n" +
    "  <h4>颜色</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <button type=\"button\" class=\"btn btn-default\">默认按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-primary\">蓝色按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-success\">绿色按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-info\">提醒按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-warning\">警告按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-danger\">错误按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-link\">模拟链接按钮</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <h4>禁用</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <button type=\"button\" class=\"btn btn-danger\" disabled>禁用按钮</button>\n" +
    "      <a href=\"#\" class=\"btn btn-link disabled\">禁用按钮</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <h4>大小</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary btn-lg\">18像素大按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-success\">14像素标准按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-warning btn-sm\">12像素按钮</button>\n" +
    "      <button type=\"button\" class=\"btn btn-info btn-xs\">12像素微小按钮</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <h4>宽度</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <button type=\"button\" class=\"btn btn-default btn-block\">自适应按钮</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/colors/templates/colors.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/colors/templates/colors.html",
    "<div id=\"colors\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>颜色</h2>\n" +
    "  </div>\n" +
    "  <h4>链接</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <a href=\"#\">链接颜色</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <h4>文本</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <span class=\"text-thick\">突出文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-darker\">深色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-default\">默认文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-light\">浅色文字</span>\n" +
    "      <span class=\"text-divider\">OR</span>\n" +
    "      <span class=\"text-muted\">浅色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-lighter\">淡色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-primary\">蓝色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-success\">绿色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-warning\">橙色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-danger\">红色文字</span>\n" +
    "      <span class=\"text-divider\">|</span>\n" +
    "      <span class=\"text-info\">消息文字</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/helper/templates/helper.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/helper/templates/helper.html",
    "<div id=\"pages\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>辅助类</h2>\n" +
    "  </div>\n" +
    "  <h4>浮动</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <p>.pull-left</p>\n" +
    "        <a class=\"thumbnail\">\n" +
    "          <img alt=\"100%x180\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4=\" style=\"height: 180px; width: 100%; display: block;\" />\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"pull-right\">\n" +
    "        <p>.pull-right</p>\n" +
    "        <a class=\"thumbnail\">\n" +
    "          <img alt=\"100%x180\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4=\" style=\"height: 180px; width: 100%; display: block;\" />\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <h4>对其</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"text-left\">\n" +
    "        <p>.text-left</p>\n" +
    "        <ul class=\"pagination\">\n" +
    "          <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "          <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <hr />\n" +
    "      <div class=\"text-right\">\n" +
    "        <p>.text-right</p>\n" +
    "        <ul class=\"pagination\">\n" +
    "          <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "          <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <hr />\n" +
    "      <div class=\"text-center\">\n" +
    "        <p>.text-center</p>\n" +
    "        <ul class=\"pagination\">\n" +
    "          <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "          <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/pages/templates/pages.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/pages/templates/pages.html",
    "<div id=\"pages\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>分页</h2>\n" +
    "  </div>\n" +
    "  <h4>默认</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <ul class=\"pagination\">\n" +
    "        <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "        <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "        <li><a href=\"#\">2</a></li>\n" +
    "        <li><a href=\"#\">3</a></li>\n" +
    "        <li><a href=\"#\">4</a></li>\n" +
    "        <li><a href=\"#\">5</a></li>\n" +
    "        <li><a href=\"#\">&raquo;</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modules/table/templates/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/table/templates/table.html",
    "<div id=\"table\" class=\"example\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h2>表格</h2>\n" +
    "  </div>\n" +
    "  <h4>无边框</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table class=\"table\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>公司</th>\n" +
    "            <th>姓名</th>\n" +
    "            <th>职业</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>有边框</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table class=\"table table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>公司</th>\n" +
    "            <th>姓名</th>\n" +
    "            <th>职业</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>鼠标变色</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table class=\"table table-hover\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>公司</th>\n" +
    "            <th>姓名</th>\n" +
    "            <th>职业</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>隔行换色</h4>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>公司</th>\n" +
    "            <th>姓名</th>\n" +
    "            <th>职业</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>千丁互联</td>\n" +
    "            <td>李双宝</td>\n" +
    "            <td>前端工程师</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("modules/tutorial/templates/tutorial.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modules/tutorial/templates/tutorial.html",
    "<div ng-include src=\"'modules/colors/templates/colors.html'\"></div>\n" +
    "<div ng-include src=\"'modules/button/templates/button.html'\"></div>\n" +
    "<div ng-include src=\"'modules/table/templates/table.html'\"></div>\n" +
    "<div ng-include src=\"'modules/pages/templates/pages.html'\"></div>\n" +
    "<div ng-include src=\"'modules/badge/templates/badge.html'\"></div>\n" +
    "<div ng-include src=\"'modules/helper/templates/helper.html'\"></div>");
}]);

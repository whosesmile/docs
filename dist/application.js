/*! angular-scaffold - v0.1.0 - 2014-07-16
* Copyright (c) 2014 whosesmile; Licensed GPLv2 */
var app=angular.module("app",["ui.router","ui.bootstrap","templates","tutorialModule","buttonModule","colorsModule","tableModule","pagesModule","badgeModule","helperModule"]);app.config(["$httpProvider",function(a){a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",a.defaults.transformRequest=[function(a){return angular.isObject(a)&&"[object File]"!==String(a)?serialize(a):a}],a.interceptors.push(["$q",function(a){return{request:function(b){return a.when(b)},response:function(b){if(b.config.parsing!==!1&&200===b.status&&angular.isObject(b.data)){var c=b.data;return c.data=c.data||{},c.data.message=c.data.message||c.message,-1!==[0,200].indexOf(c.code)?c.data:a.reject(c.data)}return a.when(b)},requestError:function(b){return a.reject(b)},responseError:function(b){return a.reject(b)}}}])}]),app.run(["$window","$document","$rootScope",function(a,b,c){angular.element(a).on("scroll",function(){c.offsetY=b.scrollTop(),c.$digest()})}]),angular.element(document).ready(function(){angular.bootstrap(document,["app"])}),app.directive("csFocus",["$timeout",function(a){return{restrict:"A",replace:!1,link:function(b,c){var d=0;!function e(){c.is(":visible")?c.focus():d++<1&&a(e,200)}()}}}]),app.directive("csNumber",function(){return{restrict:"A",replace:!1,link:function(a,b){b.on("focus",function(){this.type="number"}).on("blur",function(){this.type="text"})}}}),app.filter("group",function(){return function(a,b){if(!a)return a;if(a.$rows){for(var c=[],d=0;d<a.$rows.length;d++)c=c.concat(a.$rows[d]);if(c.length!==a.length)delete a.$rows;else for(var e=0;e<a.length;e++)if(a[e]!==c[e]){delete a.$rows;break}}if(!a.$rows){for(var f=[],d=0;d<a.length;d++)d%b===0&&f.push([]),f[f.length-1].push(a[d]);a.$rows=f}return a.$rows}}),app.filter("min",function(){return function(a,b){return Math.min(a,b)}}),app.filter("max",function(){return function(a,b){return Math.max(a,b)}}),app.factory("titleService",function(){return{title:function(){return arguments.length>0&&(document.title=arguments[0]),document.title}}}),function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(){"function"!=typeof Array.prototype.indexOf&&(Array.prototype.indexOf=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}();var serialize=function(a){var b,c,d,e,f,g,h,i="";for(b in a)if(a.hasOwnProperty(b))if(c=a[b],c instanceof Array)for(h=0;h<c.length;++h)f=c[h],d=b+"["+h+"]",g={},g[d]=f,i+=serialize(g)+"&";else if(c instanceof Object)for(e in c)c.hasOwnProperty(e)&&(f=c[e],d=b+"["+e+"]",g={},g[d]=f,i+=serialize(g)+"&");else void 0!==c&&null!==c&&(i+=encodeURIComponent(b)+"="+encodeURIComponent(c)+"&");return i.length?i.substr(0,i.length-1):i},badgeModule=angular.module("badgeModule",["ui.router","ui.bootstrap"]);badgeModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("badge",{url:"/badge",templateUrl:"modules/badge/templates/badge.html"})}]);var buttonModule=angular.module("buttonModule",["ui.router","ui.bootstrap"]);buttonModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("button",{url:"/button",templateUrl:"modules/button/templates/button.html"})}]);var colorsModule=angular.module("colorsModule",["ui.router","ui.bootstrap"]);colorsModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("colors",{url:"/colors",templateUrl:"modules/colors/templates/colors.html"})}]);var helperModule=angular.module("helperModule",["ui.router","ui.bootstrap"]);helperModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("helper",{url:"/helper",templateUrl:"modules/helper/templates/helper.html"})}]);var pagesModule=angular.module("pagesModule",["ui.router","ui.bootstrap"]);pagesModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("pages",{url:"/pages",templateUrl:"modules/pages/templates/pages.html"})}]);var tableModule=angular.module("tableModule",["ui.router","ui.bootstrap"]);tableModule.config(["$stateProvider","$urlRouterProvider",function(a){a.state("table",{url:"/table",templateUrl:"modules/table/templates/table.html"})}]);var tutorialModule=angular.module("tutorialModule",["ui.router","ui.bootstrap"]);tutorialModule.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"modules/tutorial/templates/tutorial.html"})}]),angular.module("templates",["modules/badge/templates/badge.html","modules/button/templates/button.html","modules/colors/templates/colors.html","modules/helper/templates/helper.html","modules/pages/templates/pages.html","modules/table/templates/table.html","modules/tutorial/templates/tutorial.html"]),angular.module("modules/badge/templates/badge.html",[]).run(["$templateCache",function(a){a.put("modules/badge/templates/badge.html",'<div id="badge" class="example">\n  <div class="page-header">\n    <h2>徽章</h2>\n  </div>\n  \n  <div class="panel panel-default">\n    <div class="panel-body">\n      <span class="badge">1</span>\n    </div>\n  </div>\n</div>')}]),angular.module("modules/button/templates/button.html",[]).run(["$templateCache",function(a){a.put("modules/button/templates/button.html",'<div id="button" class="example">\n  <div class="page-header">\n    <h2>按钮</h2>\n  </div>\n  <h4>颜色</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <button type="button" class="btn btn-default">默认按钮</button>\n      <button type="button" class="btn btn-primary">蓝色按钮</button>\n      <button type="button" class="btn btn-success">绿色按钮</button>\n      <button type="button" class="btn btn-info">提醒按钮</button>\n      <button type="button" class="btn btn-warning">警告按钮</button>\n      <button type="button" class="btn btn-danger">错误按钮</button>\n      <button type="button" class="btn btn-link">模拟链接按钮</button>\n    </div>\n  </div>\n  <h4>禁用</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <button type="button" class="btn btn-danger" disabled>禁用按钮</button>\n      <a href="#" class="btn btn-link disabled">禁用按钮</a>\n    </div>\n  </div>\n  <h4>大小</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <button type="button" class="btn btn-primary btn-lg">18像素大按钮</button>\n      <button type="button" class="btn btn-success">14像素标准按钮</button>\n      <button type="button" class="btn btn-warning btn-sm">12像素按钮</button>\n      <button type="button" class="btn btn-info btn-xs">12像素微小按钮</button>\n    </div>\n  </div>\n  <h4>宽度</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <button type="button" class="btn btn-default btn-block">自适应按钮</button>\n    </div>\n  </div>\n</div>')}]),angular.module("modules/colors/templates/colors.html",[]).run(["$templateCache",function(a){a.put("modules/colors/templates/colors.html",'<div id="colors" class="example">\n  <div class="page-header">\n    <h2>颜色</h2>\n  </div>\n  <h4>链接</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <a href="#">链接颜色</a>\n    </div>\n  </div>\n  <h4>文本</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <span class="text-thick">突出文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-darker">深色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-default">默认文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-light">浅色文字</span>\n      <span class="text-divider">OR</span>\n      <span class="text-muted">浅色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-lighter">淡色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-primary">蓝色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-success">绿色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-warning">橙色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-danger">红色文字</span>\n      <span class="text-divider">|</span>\n      <span class="text-info">消息文字</span>\n    </div>\n  </div>\n</div>')}]),angular.module("modules/helper/templates/helper.html",[]).run(["$templateCache",function(a){a.put("modules/helper/templates/helper.html",'<div id="pages" class="example">\n  <div class="page-header">\n    <h2>辅助类</h2>\n  </div>\n  <h4>浮动</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <div class="pull-left">\n        <p>.pull-left</p>\n        <a class="thumbnail">\n          <img alt="100%x180" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4=" style="height: 180px; width: 100%; display: block;" />\n        </a>\n      </div>\n      <div class="pull-right">\n        <p>.pull-right</p>\n        <a class="thumbnail">\n          <img alt="100%x180" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEiIGhlaWdodD0iMTgwIj48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9Ijg1LjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L3N2Zz4=" style="height: 180px; width: 100%; display: block;" />\n        </a>\n      </div>\n    </div>\n  </div>\n  <h4>对其</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <div class="text-left">\n        <p>.text-left</p>\n        <ul class="pagination">\n          <li class="disabled"><a href="#">&laquo;</a></li>\n          <li class="active"><a href="#">1</a></li>\n          <li><a href="#">2</a></li>\n          <li><a href="#">3</a></li>\n          <li><a href="#">4</a></li>\n          <li><a href="#">5</a></li>\n          <li><a href="#">&raquo;</a></li>\n        </ul>\n      </div>\n      <hr />\n      <div class="text-right">\n        <p>.text-right</p>\n        <ul class="pagination">\n          <li class="disabled"><a href="#">&laquo;</a></li>\n          <li class="active"><a href="#">1</a></li>\n          <li><a href="#">2</a></li>\n          <li><a href="#">3</a></li>\n          <li><a href="#">4</a></li>\n          <li><a href="#">5</a></li>\n          <li><a href="#">&raquo;</a></li>\n        </ul>\n      </div>\n      <hr />\n      <div class="text-center">\n        <p>.text-center</p>\n        <ul class="pagination">\n          <li class="disabled"><a href="#">&laquo;</a></li>\n          <li class="active"><a href="#">1</a></li>\n          <li><a href="#">2</a></li>\n          <li><a href="#">3</a></li>\n          <li><a href="#">4</a></li>\n          <li><a href="#">5</a></li>\n          <li><a href="#">&raquo;</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>')}]),angular.module("modules/pages/templates/pages.html",[]).run(["$templateCache",function(a){a.put("modules/pages/templates/pages.html",'<div id="pages" class="example">\n  <div class="page-header">\n    <h2>分页</h2>\n  </div>\n  <h4>默认</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <ul class="pagination">\n        <li class="disabled"><a href="#">&laquo;</a></li>\n        <li class="active"><a href="#">1</a></li>\n        <li><a href="#">2</a></li>\n        <li><a href="#">3</a></li>\n        <li><a href="#">4</a></li>\n        <li><a href="#">5</a></li>\n        <li><a href="#">&raquo;</a></li>\n      </ul>\n    </div>\n  </div>\n</div>')}]),angular.module("modules/table/templates/table.html",[]).run(["$templateCache",function(a){a.put("modules/table/templates/table.html",'<div id="table" class="example">\n  <div class="page-header">\n    <h2>表格</h2>\n  </div>\n  <h4>无边框</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <table class="table">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>公司</th>\n            <th>姓名</th>\n            <th>职业</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <h4>有边框</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <table class="table table-bordered">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>公司</th>\n            <th>姓名</th>\n            <th>职业</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <h4>鼠标变色</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <table class="table table-hover">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>公司</th>\n            <th>姓名</th>\n            <th>职业</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <h4>隔行换色</h4>\n  <div class="panel panel-default">\n    <div class="panel-body">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>公司</th>\n            <th>姓名</th>\n            <th>职业</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>2</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n          <tr>\n            <td>3</td>\n            <td>千丁互联</td>\n            <td>李双宝</td>\n            <td>前端工程师</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>')}]),angular.module("modules/tutorial/templates/tutorial.html",[]).run(["$templateCache",function(a){a.put("modules/tutorial/templates/tutorial.html","<div ng-include src=\"'modules/colors/templates/colors.html'\"></div>\n<div ng-include src=\"'modules/button/templates/button.html'\"></div>\n<div ng-include src=\"'modules/table/templates/table.html'\"></div>\n<div ng-include src=\"'modules/pages/templates/pages.html'\"></div>\n<div ng-include src=\"'modules/badge/templates/badge.html'\"></div>\n<div ng-include src=\"'modules/helper/templates/helper.html'\"></div>")}]);
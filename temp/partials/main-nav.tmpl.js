(function(module) {
try {
  module = angular.module('jobney.angular-starter.templates');
} catch (e) {
  module = angular.module('jobney.angular-starter.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/main-nav.tmpl.html',
    '<nav class="navbar navbar-default" role="navigation">\n' +
    '    <div class="container">\n' +
    '    <!-- Brand and toggle get grouped for better mobile display -->\n' +
    '    <div class="navbar-header">\n' +
    '        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' +
    '            <span class="sr-only">Toggle navigation</span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '        </button>\n' +
    '        <a class="navbar-brand">Pocket Change</a>\n' +
    '    </div>\n' +
    '\n' +
    '        <!-- Collect the nav links, forms, and other content for toggling -->\n' +
    '        <div class="collapse navbar-collapse navbar-ex1-collapse">\n' +
    '            <ul class="nav navbar-nav">\n' +
    '                <li><a href="#">Home</a></li>\n' +
    '            </ul>\n' +
    '            <div class="navbar-form navbar-right" ng-include="\'/partials/session-nav-widget.tmpl.html\'"></div>\n' +
    '        </div><!-- /.navbar-collapse -->\n' +
    '    </div>\n' +
    '</nav>');
}]);
})();

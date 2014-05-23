(function(module) {
try {
  module = angular.module('jobney.angular-starter.templates');
} catch (e) {
  module = angular.module('jobney.angular-starter.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/session-nav-widget.tmpl.html',
    '<div ng-controller="LoginCtrl as loginCtrl">\n' +
    '    <div ng-show-auth="login">\n' +
    '        <ul class="nav navbar-nav">\n' +
    '            <li>\n' +
    '                <a>\n' +
    '                    <img class="img-circle" ng-src="http://www.gravatar.com/avatar/{{auth.md5_hash}}" alt="" width="30px">\n' +
    '                    Welcome {{auth.email}}\n' +
    '                </a>\n' +
    '            </li>\n' +
    '            <li><a ng-click="loginCtrl.logout()">Log Out</a></li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

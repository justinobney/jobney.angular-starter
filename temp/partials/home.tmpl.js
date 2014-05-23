(function(module) {
try {
  module = angular.module('jobney.angular-starter.templates');
} catch (e) {
  module = angular.module('jobney.angular-starter.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/home.tmpl.html',
    '<div class="container">\n' +
    '    <div class="jumbotron">\n' +
    '        <div class="container">\n' +
    '            <h1>Hello, world!</h1>\n' +
    '            <pre>{{auth|json}}</pre>\n' +
    '            <p>\n' +
    '                <a class="btn btn-primary btn-lg">Learn more</a>\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

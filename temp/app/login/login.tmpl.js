(function(module) {
try {
  module = angular.module('jobney.angular-starter.templates');
} catch (e) {
  module = angular.module('jobney.angular-starter.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/login.tmpl.html',
    '<div class="container" ng-controller="LoginCtrl as login">\n' +
    '    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">\n' +
    '        <div class="panel panel-info">\n' +
    '            <div class="panel-heading">\n' +
    '                <div class="panel-title">Sign In</div>\n' +
    '                <div style="float:right; font-size: 80%; position: relative; top:-10px">\n' +
    '                    <a href="#">Forgot password?</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div style="padding-top:30px" class="panel-body">\n' +
    '                <form id="loginform" class="form-horizontal" role="form" ng-submit="login.login()">\n' +
    '\n' +
    '                    <div style="margin-bottom: 25px" class="input-group">\n' +
    '                        <span class="input-group-addon">\n' +
    '                            <i class="glyphicon glyphicon-user"></i>\n' +
    '                        </span>\n' +
    '                        <input ng-model="login.email" type="text" class="form-control" placeholder="email">\n' +
    '                    </div>\n' +
    '                    <div style="margin-bottom: 25px" class="input-group">\n' +
    '                        <span class="input-group-addon">\n' +
    '                            <i class="glyphicon glyphicon-lock"></i>\n' +
    '                        </span>\n' +
    '                        <input ng-model="login.password" type="password" class="form-control" placeholder="password">\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- <div class="input-group">\n' +
    '                        <div class="checkbox">\n' +
    '                            <label>\n' +
    '                                <input id="login-remember" type="checkbox" name="remember" value="1">Remember me\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                    </div> -->\n' +
    '\n' +
    '\n' +
    '                    <div style="margin-top:10px" class="form-group">\n' +
    '                        <!-- Button -->\n' +
    '\n' +
    '                        <div class="col-sm-12 controls">\n' +
    '                            <button class="btn btn-success">Login</button>\n' +
    '                            <!-- <a id="btn-fblogin" href="#" class="btn btn-primary">Login with Facebook</a> -->\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <div class="col-md-12 control">\n' +
    '                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n' +
    '                                Don\'t have an account!\n' +
    '                                <a href="#">Sign Up Here</a>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">\n' +
    '        <div class="panel panel-info">\n' +
    '            <div class="panel-heading">\n' +
    '                <div class="panel-title">Sign Up</div>\n' +
    '                <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$(\'#signupbox\').hide(); $(\'#loginbox\').show()">Sign In</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <form id="signupform" class="form-horizontal" role="form">\n' +
    '\n' +
    '                    <div id="signupalert" style="display:none" class="alert alert-danger">\n' +
    '                        <p>Error:</p>\n' +
    '                        <span></span>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="email" class="col-md-3 control-label">Email</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" name="email" placeholder="Email Address">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="firstname" class="col-md-3 control-label">First Name</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" name="firstname" placeholder="First Name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="lastname" class="col-md-3 control-label">Last Name</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" name="lastname" placeholder="Last Name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="password" class="col-md-3 control-label">Password</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="password" class="form-control" name="passwd" placeholder="Password">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="icode" class="col-md-3 control-label">Invitation Code</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" name="icode" placeholder="">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <!-- Button -->\n' +
    '                        <div class="col-md-offset-3 col-md-9">\n' +
    '                            <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>\n' +
    '                            <span style="margin-left:8px;">or</span>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div style="border-top: 1px solid #999; padding-top:20px" class="form-group">\n' +
    '                        <div class="col-md-offset-3 col-md-9">\n' +
    '                            <button id="btn-fbsignup" type="button" class="btn btn-primary"><i class="icon-facebook"></i>   Sign Up with Facebook</button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

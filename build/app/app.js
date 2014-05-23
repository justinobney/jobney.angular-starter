/// Author: Justin Obney
/// Desc: Pocket Change Firebase App
(function () {
  'use strict';
  (function (module) {
    try {
      module = angular.module('jobney.angular-starter.templates');
    } catch (e) {
      module = angular.module('jobney.angular-starter.templates', []);
    }
    module.run([
      '$templateCache',
      function ($templateCache) {
        $templateCache.put('/partials/home.tmpl.html', '<div class="container">\n' + '    <div class="jumbotron">\n' + '        <div class="container">\n' + '            <h1>Hello, world!</h1>\n' + '            <pre>{{auth|json}}</pre>\n' + '            <p>\n' + '                <a class="btn btn-primary btn-lg">Learn more</a>\n' + '            </p>\n' + '        </div>\n' + '    </div>\n' + '</div>');
      }
    ]);
  }());
  (function (module) {
    try {
      module = angular.module('jobney.angular-starter.templates');
    } catch (e) {
      module = angular.module('jobney.angular-starter.templates', []);
    }
    module.run([
      '$templateCache',
      function ($templateCache) {
        $templateCache.put('/partials/main-nav.tmpl.html', '<nav class="navbar navbar-default" role="navigation">\n' + '    <div class="container">\n' + '    <!-- Brand and toggle get grouped for better mobile display -->\n' + '    <div class="navbar-header">\n' + '        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' + '            <span class="sr-only">Toggle navigation</span>\n' + '            <span class="icon-bar"></span>\n' + '            <span class="icon-bar"></span>\n' + '            <span class="icon-bar"></span>\n' + '        </button>\n' + '        <a class="navbar-brand">Pocket Change</a>\n' + '    </div>\n' + '\n' + '        <!-- Collect the nav links, forms, and other content for toggling -->\n' + '        <div class="collapse navbar-collapse navbar-ex1-collapse">\n' + '            <ul class="nav navbar-nav">\n' + '                <li><a href="#">Home</a></li>\n' + '            </ul>\n' + '            <div class="navbar-form navbar-right" ng-include="\'/partials/session-nav-widget.tmpl.html\'"></div>\n' + '        </div><!-- /.navbar-collapse -->\n' + '    </div>\n' + '</nav>');
      }
    ]);
  }());
  (function (module) {
    try {
      module = angular.module('jobney.angular-starter.templates');
    } catch (e) {
      module = angular.module('jobney.angular-starter.templates', []);
    }
    module.run([
      '$templateCache',
      function ($templateCache) {
        $templateCache.put('/partials/session-nav-widget.tmpl.html', '<div ng-controller="LoginCtrl as loginCtrl">\n' + '    <div ng-show-auth="login">\n' + '        <ul class="nav navbar-nav">\n' + '            <li>\n' + '                <a>\n' + '                    <img class="img-circle" ng-src="http://www.gravatar.com/avatar/{{auth.md5_hash}}" alt="" width="30px">\n' + '                    Welcome {{auth.email}}\n' + '                </a>\n' + '            </li>\n' + '            <li><a ng-click="loginCtrl.logout()">Log Out</a></li>\n' + '        </ul>\n' + '    </div>\n' + '</div>');
      }
    ]);
  }());
  (function (module) {
    try {
      module = angular.module('jobney.angular-starter.templates');
    } catch (e) {
      module = angular.module('jobney.angular-starter.templates', []);
    }
    module.run([
      '$templateCache',
      function ($templateCache) {
        $templateCache.put('/partials/login.tmpl.html', '<div class="container" ng-controller="LoginCtrl as login">\n' + '    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">\n' + '        <div class="panel panel-info">\n' + '            <div class="panel-heading">\n' + '                <div class="panel-title">Sign In</div>\n' + '                <div style="float:right; font-size: 80%; position: relative; top:-10px">\n' + '                    <a href="#">Forgot password?</a>\n' + '                </div>\n' + '            </div>\n' + '\n' + '            <div style="padding-top:30px" class="panel-body">\n' + '                <form id="loginform" class="form-horizontal" role="form" ng-submit="login.login()">\n' + '\n' + '                    <div style="margin-bottom: 25px" class="input-group">\n' + '                        <span class="input-group-addon">\n' + '                            <i class="glyphicon glyphicon-user"></i>\n' + '                        </span>\n' + '                        <input ng-model="login.email" type="text" class="form-control" placeholder="email">\n' + '                    </div>\n' + '                    <div style="margin-bottom: 25px" class="input-group">\n' + '                        <span class="input-group-addon">\n' + '                            <i class="glyphicon glyphicon-lock"></i>\n' + '                        </span>\n' + '                        <input ng-model="login.password" type="password" class="form-control" placeholder="password">\n' + '                    </div>\n' + '\n' + '                    <!-- <div class="input-group">\n' + '                        <div class="checkbox">\n' + '                            <label>\n' + '                                <input id="login-remember" type="checkbox" name="remember" value="1">Remember me\n' + '                            </label>\n' + '                        </div>\n' + '                    </div> -->\n' + '\n' + '\n' + '                    <div style="margin-top:10px" class="form-group">\n' + '                        <!-- Button -->\n' + '\n' + '                        <div class="col-sm-12 controls">\n' + '                            <button class="btn btn-success">Login</button>\n' + '                            <!-- <a id="btn-fblogin" href="#" class="btn btn-primary">Login with Facebook</a> -->\n' + '                        </div>\n' + '                    </div>\n' + '\n' + '\n' + '                    <div class="form-group">\n' + '                        <div class="col-md-12 control">\n' + '                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n' + '                                Don\'t have an account!\n' + '                                <a href="#">Sign Up Here</a>\n' + '                            </div>\n' + '                        </div>\n' + '                    </div>\n' + '                </form>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '    <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">\n' + '        <div class="panel panel-info">\n' + '            <div class="panel-heading">\n' + '                <div class="panel-title">Sign Up</div>\n' + '                <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$(\'#signupbox\').hide(); $(\'#loginbox\').show()">Sign In</a>\n' + '                </div>\n' + '            </div>\n' + '            <div class="panel-body">\n' + '                <form id="signupform" class="form-horizontal" role="form">\n' + '\n' + '                    <div id="signupalert" style="display:none" class="alert alert-danger">\n' + '                        <p>Error:</p>\n' + '                        <span></span>\n' + '                    </div>\n' + '\n' + '                    <div class="form-group">\n' + '                        <label for="email" class="col-md-3 control-label">Email</label>\n' + '                        <div class="col-md-9">\n' + '                            <input type="text" class="form-control" name="email" placeholder="Email Address">\n' + '                        </div>\n' + '                    </div>\n' + '\n' + '                    <div class="form-group">\n' + '                        <label for="firstname" class="col-md-3 control-label">First Name</label>\n' + '                        <div class="col-md-9">\n' + '                            <input type="text" class="form-control" name="firstname" placeholder="First Name">\n' + '                        </div>\n' + '                    </div>\n' + '                    <div class="form-group">\n' + '                        <label for="lastname" class="col-md-3 control-label">Last Name</label>\n' + '                        <div class="col-md-9">\n' + '                            <input type="text" class="form-control" name="lastname" placeholder="Last Name">\n' + '                        </div>\n' + '                    </div>\n' + '                    <div class="form-group">\n' + '                        <label for="password" class="col-md-3 control-label">Password</label>\n' + '                        <div class="col-md-9">\n' + '                            <input type="password" class="form-control" name="passwd" placeholder="Password">\n' + '                        </div>\n' + '                    </div>\n' + '\n' + '                    <div class="form-group">\n' + '                        <label for="icode" class="col-md-3 control-label">Invitation Code</label>\n' + '                        <div class="col-md-9">\n' + '                            <input type="text" class="form-control" name="icode" placeholder="">\n' + '                        </div>\n' + '                    </div>\n' + '\n' + '                    <div class="form-group">\n' + '                        <!-- Button -->\n' + '                        <div class="col-md-offset-3 col-md-9">\n' + '                            <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>\n' + '                            <span style="margin-left:8px;">or</span>\n' + '                        </div>\n' + '                    </div>\n' + '\n' + '                    <div style="border-top: 1px solid #999; padding-top:20px" class="form-group">\n' + '                        <div class="col-md-offset-3 col-md-9">\n' + '                            <button id="btn-fbsignup" type="button" class="btn btn-primary"><i class="icon-facebook"></i> \xa0 Sign Up with Facebook</button>\n' + '                        </div>\n' + '                    </div>\n' + '                </form>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '</div>');
      }
    ]);
  }());
  angular.module('jobney.angular-starter', [
    'jobney.angular-starter.templates',
    'jobney.angular-starter.login',
    'firebase',
    'waitForAuth',
    'ui.router'
  ]);
  angular.module('jobney.angular-starter.login', [
    'jobney.angular-starter.templates',
    'firebase',
    'waitForAuth',
    'ui.router'
  ]).config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: '/partials/login.tmpl.html'
      });
    }
  ]).run([
    '$rootScope',
    '$state',
    function ($rootScope, $state) {
      $rootScope.$on('$firebaseSimpleLogin:logout', function () {
        $rootScope.auth = null;
        $state.transitionTo('login');
      });
    }
  ]);
  // Declare app level module which depends on filters, and services
  angular.module('jobney.angular-starter').constant('version', '0.1').constant('loginRedirectPath', '/login').constant('FBURL', 'https://pocketchange.firebaseio.com');
  //you can use this one to try out a demo of the seed
  //   .constant('FBURL', 'https://angularfire-seed.firebaseio.com');
  /*********************
 * !!FOR E2E TESTING!!
 *
 * Must enable email/password logins and manually create
 * the test user before the e2e tests will pass
 *
 * user: test@test.com
 * pass: test123
 */
  angular.module('jobney.angular-starter').run([
    '$rootScope',
    '$state',
    'waitForAuth',
    function ($rootScope, $state, waitForAuth) {
      $rootScope.$on('$firebaseSimpleLogin:login', setUser);
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!$rootScope.auth && toState.name != 'login') {
          event.preventDefault();
        }
      });
      function setUser(e, auth) {
        $rootScope.auth = auth;
        $state.transitionTo('home');
      }
    }
  ]).config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/',
        templateUrl: '/partials/home.tmpl.html',
        resolve: {
          auth: function (waitForAuth) {
            return waitForAuth;
          }
        }
      });
      $urlRouterProvider.otherwise('/login');
    }
  ]);
  angular.module('jobney.angular-starter').factory('firebaseRef', [
    'Firebase',
    'FBURL',
    function (Firebase, FBURL) {
      /**
         * @function
         * @name firebaseRef
         * @param {String|Array...} path
         * @return a Firebase instance
         */
      return function (path) {
        return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
      };
      function pathRef(args) {
        for (var i = 0; i < args.length; i++) {
          if (typeof args[i] === 'object') {
            args[i] = pathRef(args[i]);
          }
        }
        return args.join('/');
      }
    }
  ]).service('syncData', [
    '$firebase',
    'firebaseRef',
    function ($firebase, firebaseRef) {
      /**
     * @function
     * @name syncData
     * @param {String|Array...} path
     * @param {int} [limit]
     * @return a Firebase instance
     */
      return function (path, limit) {
        var ref = firebaseRef(path);
        limit && (ref = ref.limit(limit));
        return $firebase(ref);
      };
    }
  ]);
  /**
 * This module monitors angularFire's authentication and performs actions based on authentication state.
 *
 * See usage examples here: https://gist.github.com/katowulf/7328023
 */
  angular.module('waitForAuth', []).service('waitForAuth', [
    '$rootScope',
    '$q',
    '$timeout',
    function ($rootScope, $q, $timeout) {
      var def = $q.defer(), subs = [];
      subs.push($rootScope.$on('$firebaseSimpleLogin:login', fn));
      subs.push($rootScope.$on('$firebaseSimpleLogin:logout', fn));
      subs.push($rootScope.$on('$firebaseSimpleLogin:error', fn));
      function fn(err) {
        if ($rootScope.auth) {
          $rootScope.auth.error = err instanceof Error ? err.toString() : null;
        }
        for (var i = 0; i < subs.length; i++) {
          subs[i]();
        }
        $timeout(function () {
          // force $scope.$apply to be re-run after login resolves
          def.resolve();
        });
      }
      return def.promise;
    }
  ]).directive('ngCloakAuth', [
    'waitForAuth',
    function (waitForAuth) {
      return {
        restrict: 'A',
        compile: function (el) {
          el.addClass('hide');
          waitForAuth.then(function () {
            el.removeClass('hide');
          });
        }
      };
    }
  ]).directive('ngShowAuth', [
    '$rootScope',
    function ($rootScope) {
      var loginState;
      $rootScope.$on('$firebaseSimpleLogin:login', function () {
        loginState = 'login';
      });
      $rootScope.$on('$firebaseSimpleLogin:logout', function () {
        loginState = 'logout';
      });
      $rootScope.$on('$firebaseSimpleLogin:error', function () {
        loginState = 'error';
      });
      function inList(needle, list) {
        var res = false;
        angular.forEach(list, function (x) {
          if (x === needle) {
            res = true;
            return true;
          }
          return false;
        });
        return res;
      }
      function assertValidState(state) {
        if (!state) {
          throw new Error('ng-show-auth directive must be login, logout, or error (you may use a comma-separated list)');
        }
        var states = (state || '').split(',');
        angular.forEach(states, function (s) {
          if (!inList(s, [
              'login',
              'logout',
              'error'
            ])) {
            throw new Error('Invalid state "' + s + '" for ng-show-auth directive, must be one of login, logout, or error');
          }
        });
        return true;
      }
      return {
        restrict: 'A',
        compile: function (el, attr) {
          assertValidState(attr.ngShowAuth);
          var expState = (attr.ngShowAuth || '').split(',');
          function fn(newState) {
            loginState = newState;
            var hide = !inList(newState, expState);
            el.toggleClass('hide', hide);
          }
          fn(loginState);
          $rootScope.$on('$firebaseSimpleLogin:login', function () {
            fn('login');
          });
          $rootScope.$on('$firebaseSimpleLogin:logout', function () {
            fn('logout');
          });
          $rootScope.$on('$firebaseSimpleLogin:error', function () {
            fn('error');
          });
        }
      };
    }
  ]);
  angular.module('jobney.angular-starter.login').controller('LoginCtrl', [
    'loginService',
    '$state',
    function (loginService, $state) {
      var viewModel = this;
      viewModel.login = function () {
        viewModel.err = null;
        if (!viewModel.email) {
          viewModel.err = 'Please enter an email address';
        } else if (!viewModel.password) {
          viewModel.err = 'Please enter a password';
        } else {
          loginService.login(viewModel.email, viewModel.password, function (err, user) {
            viewModel.err = err ? err + '' : null;
            if (!err) {
              $state.transitionTo('home');
            }
          });
        }
      };
      viewModel.logout = function () {
        loginService.logout();
      };
      viewModel.register = function () {
        loginService.createAccount(viewModel.email, viewModel.password, function () {
          loginService.login(viewModel.email, viewModel.password, function (err, user) {
            viewModel.err = err ? err + '' : null;
            if (!err) {
              console.log(user);
            }
          });
        });
      };
      ctor();
      function ctor() {
        viewModel.email = 'justinobney@gmail.com';
        viewModel.password = null;
        loginService.init();
      }
    }
  ]);
  angular.module('jobney.angular-starter.login').factory('loginService', [
    '$rootScope',
    '$firebaseSimpleLogin',
    'firebaseRef',
    '$timeout',
    function ($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout) {
      var auth = null;
      return {
        init: function () {
          return auth = $firebaseSimpleLogin(firebaseRef());
        },
        login: function (email, pass, callback) {
          assertAuth();
          auth.$login('password', {
            email: email,
            password: pass,
            rememberMe: true
          }).then(function (user) {
            if (callback) {
              //todo-bug https://github.com/firebase/angularFire/issues/199
              $timeout(function () {
                callback(null, user);
              });
            }
          }, callback);
        },
        logout: function () {
          assertAuth();
          auth.$logout();
        },
        changePassword: function (opts) {
          assertAuth();
          var cb = opts.callback || function () {
            };
          if (!opts.oldpass || !opts.newpass) {
            $timeout(function () {
              cb('Please enter a password');
            });
          } else if (opts.newpass !== opts.confirm) {
            $timeout(function () {
              cb('Passwords do not match');
            });
          } else {
            auth.$changePassword(opts.email, opts.oldpass, opts.newpass).then(function () {
              cb && cb(null);
            }, cb);
          }
        },
        createAccount: function (email, pass, callback) {
          assertAuth();
          auth.$createUser(email, pass).then(function (user) {
            callback && callback(null, user);
          }, callback);
        }
      };
      function assertAuth() {
        if (auth === null) {
          throw new Error('Must call loginService.init() before using its methods');
        }
      }
    }
  ]);
}());
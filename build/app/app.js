'use strict';
angular.module('jobney.angular-starter', [
  'firebase',
  'waitForAuth'
]);
// Declare app level module which depends on filters, and services
angular.module('jobney.angular-starter').constant('version', '0.1').constant('loginRedirectPath', '/login').constant('FBURL', 'https://blinding-fire-7431.firebaseio.com');
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
  function ($rootScope) {
    $rootScope.$on('$firebaseSimpleLogin:login', setUser);
    function setUser(e, auth) {
      $rootScope.auth = auth;
    }
  }
]);
function pathRef(args) {
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === 'object') {
      args[i] = pathRef(args[i]);
    }
  }
  return args.join('/');
}
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
angular.module('jobney.angular-starter').controller('LoginCtrl', [
  'loginService',
  '$location',
  function (loginService, $location) {
    var viewModel = this;
    viewModel.login = function () {
      viewModel.err = null;
      if (!viewModel.email) {
        viewModel.err = 'Please enter an email address';
      } else if (!viewModel.pass) {
        viewModel.err = 'Please enter a password';
      } else {
        loginService.login(viewModel.email, viewModel.pass, function (err, user) {
          viewModel.err = err ? err + '' : null;
          if (!err) {
            console.log(user);
          }
        });
      }
    };
    viewModel.logout = function () {
      loginService.logout();
    };
    ctor();
    function ctor() {
      viewModel.email = 'justinobney@gmail.com';
      viewModel.pass = null;
      loginService.init();
    }
  }
]);
angular.module('jobney.angular-starter').factory('loginService', [
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
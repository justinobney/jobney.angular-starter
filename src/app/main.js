angular
    .module('jobney.angular-starter')
    .run(function($rootScope, $state, waitForAuth) {
        $rootScope.$on('$firebaseSimpleLogin:login', setUser)
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            if(!$rootScope.auth && toState.name != 'login'){
                event.preventDefault();
            }
        })

        function setUser(e, auth) {
            $rootScope.auth = auth;
            $state.transitionTo('home');
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/partials/home.tmpl.html',
                resolve: {
                    auth: function(waitForAuth){
                        return waitForAuth;
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');
    });
angular
    .module('jobney.angular-starter.login', [
            'jobney.angular-starter.templates',
            'firebase',
            'waitForAuth',
            'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/partials/login.tmpl.html'
            });
    }).run(function($rootScope, $state){
        $rootScope.$on('$firebaseSimpleLogin:logout', function(){
            $rootScope.auth = null;
            $state.transitionTo('login');
        })
    });
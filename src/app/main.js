angular
    .module('jobney.angular-starter')
    .run(function($rootScope) {
        $rootScope.$on('$firebaseSimpleLogin:login', setUser)

        function setUser(e, auth){
            $rootScope.auth = auth;
        }
    });

function pathRef(args) {
    for (var i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'object') {
            args[i] = pathRef(args[i]);
        }
    }
    return args.join('/');
}

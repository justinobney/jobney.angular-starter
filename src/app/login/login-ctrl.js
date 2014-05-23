angular
    .module('jobney.angular-starter.login')
    .controller('LoginCtrl', function(loginService, $state) {
        var viewModel = this;

        viewModel.login = function() {
            viewModel.err = null;
            if (!viewModel.email) {
                viewModel.err = 'Please enter an email address';
            } else if (!viewModel.password) {
                viewModel.err = 'Please enter a password';
            } else {
                loginService.login(viewModel.email, viewModel.password, function(err, user) {
                    viewModel.err = err ? err + '' : null;
                    if (!err) {
                        $state.transitionTo('home');
                    }
                });
            }
        };

        viewModel.logout = function() {
            loginService.logout();
        };

        viewModel.register = function() {
            loginService.createAccount(viewModel.email, viewModel.password, function(){
                loginService.login(viewModel.email, viewModel.password, function(err, user) {
                    viewModel.err = err ? err + '' : null;
                    if (!err) {
                        console.log(user);
                    }
                });
            });
        };

        ctor();
        function ctor(){
            viewModel.email = 'justinobney@gmail.com';
            viewModel.password = null;

            loginService.init();
        }
    });

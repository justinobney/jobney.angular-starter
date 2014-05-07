angular
    .module('jobney.angular-starter')
    .controller('LoginCtrl', function(loginService, $location) {
        var viewModel = this;

        viewModel.login = function() {
            viewModel.err = null;
            if (!viewModel.email) {
                viewModel.err = 'Please enter an email address';
            } else if (!viewModel.pass) {
                viewModel.err = 'Please enter a password';
            } else {
                loginService.login(viewModel.email, viewModel.pass, function(err, user) {
                    viewModel.err = err ? err + '' : null;
                    if (!err) {
                        console.log(user);
                    }
                });
            }
        };

        viewModel.logout = function() {
            loginService.logout();
        };

        ctor();
        function ctor(){
            viewModel.email = 'justinobney@gmail.com';
            viewModel.pass = null;

            loginService.init();
        }
    });

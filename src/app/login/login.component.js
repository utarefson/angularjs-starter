angular
  .module('loginModule')
  .component('loginComponent', {   // Use camelcase
    templateUrl: 'app/login/login.html',
    controller: function ($state, loginService) {
        console.log('Running Controller of LoginComponent');

        var _this = this;
        _this.user = {};

        _this.loginFunction = function() {  
            console.log("LoginFunction()");
            console.log(_this.user);

            var promise = loginService.loginUser(_this.user);
            promise.then(function(result){
                console.log('loginUser() - Result', result);
                $state.go('CategoryPage', {categoryId: 1});
            }).catch(function(error){
                console.log('loginUser() - Error Found:', error);
                alert('Incorrect username or password!');
            }).finally(function(){
                console.log('loginUser() has been finished!');
            });
        };
    }
  });
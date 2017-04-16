angular
    .module('loginModule')
    .factory('loginService', function($q, $resource) {
        return {
            getUsers: function() {
                var resource = $resource('http://localhost:9000/users');
                var future = $q.defer();

                resource.query().$promise.then(function(result) {
                    future.resolve(result);
                }).catch(function(error){
                    future.reject(error);
                });

                return future.promise;
            },

            loginUser: function(user) {
                console.log("LoginService   -->     loginUser()");
                console.log(user);
                var resource = $resource('http://localhost:9000/users?username=:username&password=:password', {
                    username:'@username', 
                    password:'@password'
                });
                var future = $q.defer();

                resource.query(user).$promise.then(function(result) {
                    if (result.length >= 1) {
                        future.resolve(result);
                    } else {
                        future.reject({
                            status: 401,
                            statusText: "Unauthorized"
                        });
                    }
                }).catch(function(error){
                    future.reject(error);
                });

                return future.promise;
            }
        };
    });

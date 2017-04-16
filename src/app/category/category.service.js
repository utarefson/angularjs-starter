angular
    .module('categoryModule')
    .factory('categoryService', function($q, $resource) {
        return {
            getCategories: function() {
                var resource = $resource('http://localhost:9000/categories');
                var future = $q.defer();

                resource.query().$promise.then(function(result) {
                    future.resolve(result);
                }).catch(function(error){
                    future.reject(error);
                });

                return future.promise;
            }
        };
    });

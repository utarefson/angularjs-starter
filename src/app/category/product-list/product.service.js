angular
    .module('categoryModule')
    .factory('productService', function($q, $resource) {
        return {
            getProducts: function() {
                var resource = $resource('http://localhost:9000/products');
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

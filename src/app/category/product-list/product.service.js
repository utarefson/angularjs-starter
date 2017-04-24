angular
    .module('categoryModule')
    .factory('productService', function($q, $resource) {
        var resource = $resource('http://localhost:9000/products/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
        var future = $q.defer();

        return {
            getProducts: getProducts,
            getProduct: getProduct,
            addProduct: addProduct,
            deleteProduct: deleteProduct,
            updateProduct: updateProduct
        };

        function getProducts() {
            resource.query().$promise.then(function(result) {
                future.resolve(result);
            }).catch(function(error){
                future.reject(error);
            });

            return future.promise;
        }

        function getProduct(id) {
            resource.get({id: id}).$promise.then(function(result){
                future.resolve(result);
            }).catch(function(error){
                future.reject(error);
            });

            return future.promise;
        }

        function addProduct(product) {
            resource.save(product).$promise.then(function(result){
                future.resolve(result);
            }).catch(function(error){
                future.reject(error);
            });

            return future.promise;
        }

        function deleteProduct(product) {
            resource.delete({id: product.id}).$promise.then(function(result){
                future.resolve(result);
            }).catch(function(error){
                future.reject(error);
            });

            return future.promise;
        }

        function updateProduct(product) {
            resource.update({id: product.id}, product).$promise.then(function(result){
                future.resolve(result);
            }).catch(function(error){
                future.reject(error);
            });

            return future.promise;
        }
    });

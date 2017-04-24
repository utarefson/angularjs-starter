angular
  .module('categoryModule')
  .component('editProductComponent', {   // Use camelcase
    templateUrl: 'app/category/edit-product/edit-product.html',
    controller: function (productService) {
        console.log('Running Controller of EditProductComponent');

        var _this = this;
        _this.product = {};

        _this.editFunction = function() {
            var promise = productService.editProduct(_this.product);
            promise.then(function(result){
                console.log('Result editProduct', result);
                
                // Communication with parent component!
                _this.onEditx();
            }).catch(function(error){
            }).finally(function(){
            });
        };
    },
    bindings: {
        onEditx: '&'
    }
  });
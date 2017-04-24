angular
  .module('categoryModule')
  .component('addProductComponent', {   // Use camelcase
    templateUrl: 'app/category/add-product/add-product.html',
    controller: function (productService) {
        console.log('Running Controller of AddProductComponent');

        var _this = this;
        _this.product = {};

        _this.addFunction = function() {
            var promise = productService.addProduct(_this.product);
            promise.then(function(result){
                console.log('Result addProduct', result);
                
                // Communication with parent component!
                _this.onAddx();
            }).catch(function(error){
            }).finally(function(){
            });
        };
    },
    bindings: {
        onAddx: '&'
    }
  });
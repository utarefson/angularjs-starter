angular
  .module('categoryModule')
  .component('productListComponent', {   // Use camelcase
    templateUrl: 'app/category/product-list/product-list.html',
    controller: function (productService) {
        console.log('Running Controller of ProductListComponent');

        //console.log("categoryx: " + this.categoryx());

        var _this = this;
        _this.sortType = 'name';        // set the default sort type
        _this.sortReverse = false;      // set the default sort order
        _this.searchProduct = '';       // set the default search/filter term

        _this.products = [];
        var promise = productService.getProducts();
        promise.then(function(result){
            console.log('getProducts() - Result', result);
            _this.products = result;
        }).catch(function(error){
            console.log('getProducts() - Error Found:', error);
            _this.productServiceError = {
                status: error.status,
                statusText: error.statusText
            };
        }).finally(function(){
            console.log('getProducts() has been finished!');
        });
    },
    bindings: {
        categoryx: '@'
    }
  });
angular
  .module('categoryModule')
  .component('productListComponent', {   // Use camelcase
    templateUrl: 'app/category/product-list/product-list.html',
    controller: function (productService, $window) {
        console.log('Running Controller of ProductListComponent');

        //console.log("categoryx: " + this.categoryx());

        var _this = this;
        _this.sortType = 'id';          // set the default sort type
        _this.sortReverse = false;      // set the default sort order
        _this.searchProduct = '';       // set the default search/filter term
        _this.editModalShown = false;       // by default the edit modal is hidden
        _this.deleteModalShown = false;     // by default the delete modal is hidden
        _this.selectedProduct = null;

        _this.products = [];
        _this.loadProductList = function() {
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
        }

        _this.editFunction = function(product) {
            console.log("editFunction()", product);
            _this.editModalShown = !_this.editModalShown;
            _this.selectedProduct = product;
        };

        _this.editProduct = function() {
            console.log("editProduct()");
            var promise = productService.updateProduct(_this.selectedProduct);
            promise.then(function(result){
                console.log("Product was edited!");
                _this.editModalShown = !_this.editModalShown;
                _this.selectedProduct = null;

                $window.location.reload();
            }).catch(function(error){
            }).finally(function(){
            });
        }

        _this.deleteFunction = function(product) {
            console.log("deleteFunction()", product);
            _this.deleteModalShown = !_this.deleteModalShown;
            _this.selectedProduct = product;
        };

        _this.cancelDeleteAction = function() {
            _this.deleteModalShown = !_this.deleteModalShown;  
            _this.selectedProduct = null;
        };

        _this.confirmDeteleAction = function() {
            var promise = productService.deleteProduct(_this.selectedProduct);
            promise.then(function(result){
                console.log("Product was removed!");
                _this.deleteModalShown = !_this.deleteModalShown;
                _this.selectedProduct = null;

                $window.location.reload();
            }).catch(function(error){
            }).finally(function(){
            });
        };

        _this.loadProductList();
    },
    bindings: {
        categoryx: '@'
    }
  });
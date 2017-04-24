angular
    .module('categoryModule')
    .controller('categoryController', function($stateParams, $window) {     // Dependency Injection ($log, $scope)
        console.log('Running Controller of categoryModule');

        // Here we pass the categoryId to the ProductListComponent
        var _this = this;
        _this.categoryId = $stateParams.categoryId;
        _this.addModalShown = false;
        _this.loadProducts = false;

        _this.addFunction = function() {
            console.log("addFunction()");
            _this.addModalShown = !_this.addModalShown;
        };

        _this.onAddx = function() {
            console.log("onAddx()");
            _this.addModalShown = !_this.addModalShown;

            console.log("Refresh the list of products.");
            $window.location.reload();
        }
    });

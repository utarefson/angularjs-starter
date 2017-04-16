angular
    .module('categoryModule')
    .controller('categoryController', function($stateParams) {     // Dependency Injection ($log, $scope)
        console.log('Running Controller of categoryModule');

        // Here we pass the categoryId to the ProductListComponent
        this.categoryId = $stateParams.categoryId;
    });

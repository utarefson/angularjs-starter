angular
    .module('categoryModule')
    .controller('categoryController', function() {     // Dependency Injection ($log, $scope)
        console.log('Running Controller of categoryModule');

        this.version = '1.0.0';
    });

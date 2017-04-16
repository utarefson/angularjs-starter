angular
    .module('categoryModule')
    .controller('categoryController', function($state) {     // Dependency Injection ($log, $scope)
        console.log('Running Controller of categoryModule');

        this.version = '1.0.0';

        //$state.go('LoginPage');
    });

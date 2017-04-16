angular
  .module('appModule')
  .component('loginComponent', {   // Use camelcase
    templateUrl: 'app/login/login.html',
    controller: function () {//courseService
        console.log('Running Controller of LoginComponent');
/*
        var _this = this;
        _this.students = [];

        var promise = courseService.getStudents();
        promise.then(function(result){
            console.log('Result', result);
            _this.students = result;
        }).catch(function(error){
            console.log('Error Found:', error);
            _this.courseServiceError = {
                status: error.status,
                statusText: error.statusText
            };
        }).finally(function(){
            console.log('getStudents has been finished!');
        });

        console.log('Test Async');*/
    }
  });
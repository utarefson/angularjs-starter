angular
  .module('categoryModule')
  .component('categoryMenuComponent', {   // Use camelcase
    templateUrl: 'app/category/category-menu/category-menu.html',
    controller: function (categoryService) {
        console.log('Running Controller of CategoryMenuComponent');

        var _this = this;
        _this.categories = [];

        var promise = categoryService.getCategories();
        promise.then(function(result){
            console.log('getCategories() - Result', result);
            _this.categories = result;
        }).catch(function(error){
            console.log('getCategories() - Error Found:', error);
        }).finally(function(){
            console.log('getCategories() has been finished!');
        });
    }
  });

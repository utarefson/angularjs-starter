angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {
      this.hello = 'Hell World!';
    }
  });

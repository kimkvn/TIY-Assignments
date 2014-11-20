(function(){

  var app = angular.module('profile', []);

    app.controller('userController', ['$http', function($http){

      var user = this;
      user.info = [];
      $http.get('https://api.github.com/users/kimkvn').success(function(data){
        user.info = data;

      });
    }]);



})();

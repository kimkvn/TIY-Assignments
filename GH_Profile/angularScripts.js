(function(){

  var app = angular.module('githubProfile', []);

    app.controller('UserController', ['$http', function($http){

      user.info = [];
      $http.get('/kimkvn.json').success(function(data){
        user.info = data;

      });
    }]);



})();

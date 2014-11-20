(function(){

  // var app = angular.module('profile', []);
  //
  //   app.controller('userController', ['$http', function($http){
  //
  //     var user = this;
  //     user.info = [];
  //     $http.get('kimkvn.json').success(function(data){
  //       user.info = data;
  //
  //     });
  //   }]);

  var app =

  angular.module('profile').controller('userController', function(Restangular){

    Restangular.setBaseUrl('https://api.github.com');

    this.user = Restangular.one('users', 'kimkvn').get().$object;

    });

})();

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

  angular.module('profile', ['restangular']);

  angular.module('profile').controller('userController', function(Restangular){

    Restangular.setBaseUrl('https://api.github.com');

    this.user = {};

    var user = Restangular.one('users', 'kimkvn')
      .get().then(function(data){
      self.user = data;

    });


    });

})();

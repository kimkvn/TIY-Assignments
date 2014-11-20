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

  angular.module('profile').controller('userController', function($scope, Restangular){

    var baseAccounts = Restangular.all('kimkvn.json');

    baseAccounts.getList().then(function(accounts){
      $scope.allAccounts = accounts;
    });

  });


})();

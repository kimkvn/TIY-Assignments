// (function(){
//
//   var app = angular.module('profile', []);
//
//     app.controller('userController', ['$http', function($http){
//
//       var user = this;
//       user.info = [];
//       $http.get('kimkvn.json').success(function(data){
//         user.info = data;
//
//       });
//     }]);
//
// })();

'use-strict';

var app = angular.module('profile').constant('API', {
  base: 'https://api.github.com'
})
  .run(function(Restangular, API){
    Restangular.setBaseUrl(API.base);
  })
    .factory('Users', function(Restangular){
      return Restangular.service('users');
    })
      .controller('userController', function(Users){

        var user =  Users.one('kimkvn');

        this.user = User.get().$object;

        this.user.repos = Use.all('repos').getList().$object;

      });

// var app =
//
//angular.module('profile').controller('userController', function(Restangular){
//
//   Restangular.setBaseUrl('https://api.github.com');
//
//   // this.user = Restangular.one('users', 'kimkvn').get().$object;
//
//   var User = Restangular.one('users', 'kimkvn');
//
//   var userPromise = User.get();
//
//   this.user = userPormise.$object;
//
//   var UserRepos = User.all('repos');
//
//   this.repos = UserRepos.getList().$object;
//
//   });

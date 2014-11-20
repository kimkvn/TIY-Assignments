'use strict';

/**
 * @ngdoc overview
 * @name 33LookCommentsApp
 * @description
 * # 33LookCommentsApp
 *
 * Main module of the application.
 */
angular
  .module('33LookCommentsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

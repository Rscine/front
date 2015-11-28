'use strict';

/**
 * @ngdoc overview
 * @name rscineFrontendApp
 * @description
 * # rscineFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('rscineFrontendApp', [
    'ngResource',
    'ngRoute',
    'ng-admin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

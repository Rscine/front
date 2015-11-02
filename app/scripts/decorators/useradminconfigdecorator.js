'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.decorator:Useradminconfig
 * @description
 * # Useradminconfig
 * Decorator of the rscineFrontendApp
 */
angular.module('rscineFrontendApp')
  .config(function (NgAdminConfigurationProvider, $provide) {
    $provide.decorator('NgAdminConfiguration', function ($delegate) {
      return $delegate;
    });
  });

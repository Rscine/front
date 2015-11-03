'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin for users
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
         var nga = NgAdminConfigurationProvider;

         // create an admin application
         var admin = adminProvider.getApplication();


         var county = adminProvider.getEntity('counties');

         county.listView().fields([
             nga.field('id'),
             nga.field('name')
         ]);

         admin.addEntity(county);

         adminProvider.setConfiguration(admin);
    });

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

         var department = nga.entity('departments');

         department.listView().fields([
             nga.field('id'),
             nga.field('name'),
             nga.field('number')
         ]);

         department.showView().fields([
             nga.field('id'),
             nga.field('name'),
             nga.field('number')
         ]);

         department.editionView().fields([
             nga.field('name'),
             nga.field('number')
         ]);

         admin.addEntity(department);

         adminProvider.setConfiguration(admin);
    });

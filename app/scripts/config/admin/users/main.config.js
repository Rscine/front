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

         var admin = adminProvider.getApplication();

         var user = adminProvider.getEntity('users');

         var userViewFields = [
             nga.field('id'),
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail')
         ];

         var userCreateFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email', 'email').label('E-mail'),
             nga.field('firstPlainPassword', 'password').label('Mot de passe'),
             nga.field('secondPlainPassword', 'password').label('Confirmation du mot de passe')
         ];

         var userEditFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email', 'email').label('E-mail'),
             nga.field('department_id', 'reference')
                  .label('Départment')
                  .targetEntity(adminProvider.getEntity('departments'))
                  .targetField(nga.field('name'))
                  .remoteComplete(true, {
                      refreshDelay: 200,
                      searchQuery: search => ({ q: search })
                  })
         ];

         var userDeleteFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail')
         ];

         user.listView().fields(userViewFields);
         user.showView().fields(userViewFields);

         user.editionView().fields(userEditFields);

         user.deletionView().fields(userDeleteFields);

         user.creationView().fields(userCreateFields);

         admin.addEntity(user);
         // more configuation here later
         // ...
         // attach the admin application to the DOM and run it
         nga.configure(admin);

        // create an admin application
        adminProvider.setConfiguration(admin);
    });

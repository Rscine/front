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
             nga.field('email').label('E-mail'),
             nga.field('department_id', 'reference')
                .isDetailLink(true)
                .label('Départment')
                .targetEntity(adminProvider.getEntity('departments'))
                .targetField(nga.field('name'))
                .singleApiCall(ids => ({'id': ids })),
             nga.field('company_id', 'reference')
                .isDetailLink(true)
                .label('Société')
                .targetEntity(adminProvider.getEntity('companies'))
                .targetField(nga.field('name'))
                .singleApiCall(ids => ({'id': ids }))
         ];

         var userEditFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email', 'email').label('E-mail'),
             nga.field('department_id', 'reference')
               .label('Département')
               .targetEntity(adminProvider.getEntity('departments'))
               .targetField(nga.field('name'))
               .sortField('name')
               .sortDir('ASC')
               .remoteComplete(true, {
                   refreshDelay: 200,
                   searchQuery: search => ({ q: search })
               })
         ];

         var userDeleteFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail')
         ];

         user.listView()
            .fields(userViewFields)
            .listActions(['edit', 'delete']);

         user.showView().fields(userViewFields);

         user.editionView()
            .fields(userEditFields)
            .actions(['back', 'delete']);

         user.deletionView().fields(userDeleteFields);
         
         admin.addEntity(user);
         // more configuation here later
         // ...
         // attach the admin application to the DOM and run it
         nga.configure(admin);

        // create an admin application
        adminProvider.setConfiguration(admin);
    });

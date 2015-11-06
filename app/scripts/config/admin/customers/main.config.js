'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin for customers
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
         var nga = NgAdminConfigurationProvider;

         var admin = adminProvider.getApplication();

         var customer = adminProvider.getEntity('customers');

         var customerViewFields = [
             nga.field('id'),
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail'),
             nga.field('department_id', 'reference')
                .isDetailLink(true)
                .label('Départment')
                .targetEntity(adminProvider.getEntity('departments'))
                .targetField(nga.field('name'))
                .singleApiCall(ids => ({'id': ids }))
         ];

         var customerCreateFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email', 'email').label('E-mail'),
             nga.field('firstPlainPassword', 'password').label('Mot de passe'),
             nga.field('secondPlainPassword', 'password').label('Confirmation du mot de passe')
         ];

         var customerEditFields = [
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

         var customerDeleteFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail')
         ];

         customer.listView()
            .fields(customerViewFields)
            .listActions(['edit', 'delete']);

         customer.showView().fields(customerViewFields);

         customer.editionView()
            .fields(customerEditFields)
            .actions(['back', 'delete']);

         customer.deletionView().fields(customerDeleteFields);

         customer.creationView()
            .fields(customerCreateFields)
            .actions(['back']);

         admin.addEntity(customer);
         nga.configure(admin);

        adminProvider.setConfiguration(admin);
    });

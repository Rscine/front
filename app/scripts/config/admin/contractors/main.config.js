'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin for contractors
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
         var nga = NgAdminConfigurationProvider;

         var admin = adminProvider.getApplication();

         var contractor = adminProvider.getEntity('contractors');

         var contractorViewFields = [
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

         var contractorCreateFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email', 'email').label('E-mail'),
             nga.field('firstPlainPassword', 'password').label('Mot de passe'),
             nga.field('secondPlainPassword', 'password').label('Confirmation du mot de passe')
         ];

         var contractorEditFields = [
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

         var contractorDeleteFields = [
             nga.field('username').label('Nom d\'utilisateur'),
             nga.field('email').label('E-mail')
         ];

         contractor.listView()
            .fields(contractorViewFields)
            .listActions(['edit', 'delete']);

         contractor.showView().fields(contractorViewFields);

         contractor.editionView()
            .fields(contractorEditFields)
            .actions(['back', 'delete']);

         contractor.deletionView().fields(contractorDeleteFields);

         contractor.creationView()
            .fields(contractorCreateFields)
            .actions(['back']);

         admin.addEntity(contractor);
         nga.configure(admin);

        adminProvider.setConfiguration(admin);
    });

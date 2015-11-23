'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin for companies
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
         var nga = NgAdminConfigurationProvider;

         var admin = adminProvider.getApplication();

         var company = adminProvider.getEntity('companies');

         var companyViewFields = [
             nga.field('siret'),
             nga.field('name').label('Nom de la société')
         ];

         var companyCreateFields = [
             nga.field('siret'),
             nga.field('name').label('Nom de la société')
         ];

         var companyEditFields = [
             nga.field('siret'),
             nga.field('name').label('Nom de la société')
         ];

         var companyDeleteFields = [
             nga.field('siret'),
             nga.field('name').label('Nom de la société')
         ];

         company.listView()
            .fields(companyViewFields)
            .listActions(['edit', 'delete']);

         company.showView().fields(companyViewFields);

         company.editionView()
            .fields(companyEditFields)
            .actions(['back', 'delete']);

         company.deletionView().fields(companyDeleteFields);

         company.creationView()
            .fields(companyCreateFields)
            .actions(['back']);

         admin.addEntity(company);
         nga.configure(admin);

        adminProvider.setConfiguration(admin);
    });

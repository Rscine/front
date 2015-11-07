'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin for offers
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
         var nga = NgAdminConfigurationProvider;

         var admin = adminProvider.getApplication();

         var offer = adminProvider.getEntity('offers');

         var offerViewFields = [
             nga.field('id'),
             nga.field('name').label('Nom de l\'offre'),
             nga.field('description', 'text').label('Description')
         ];

         var offerCreateFields = [
             nga.field('name').label('Nom de l\'offre'),
             nga.field('description', 'text').label('Description')
         ];

         var offerEditFields = [
             nga.field('name').label('Nom de l\'offre'),
             nga.field('description', 'text').label('Description')
         ];

         var offerDeleteFields = [
             nga.field('id'),
             nga.field('name').label('Nom de l\'offre'),
             nga.field('description', 'text').label('Description')
         ];

         offer.listView()
            .fields(offerViewFields)
            .listActions(['edit', 'delete']);

         offer.showView().fields(offerViewFields);

         offer.editionView()
            .fields(offerEditFields)
            .actions(['back', 'delete']);

         offer.deletionView().fields(offerDeleteFields);

         offer.creationView()
            .fields(offerCreateFields)
            .actions(['back']);

         admin.addEntity(offer);
         nga.configure(admin);

        adminProvider.setConfiguration(admin);
    });

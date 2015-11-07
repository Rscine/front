'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.config:main
 * @description
 * Configuration of ng-admin menu
 */

angular.module('rscineFrontendApp')

    .config(function(NgAdminConfigurationProvider, adminProvider) {
        var nga = NgAdminConfigurationProvider;

        var admin = adminProvider.getApplication();

        var menu = nga.menu()
            .addChild(
                nga.menu().title('Users general')
                .addChild(nga.menu(adminProvider.getEntity('users')))
                .addChild(nga.menu(adminProvider.getEntity('customers')))
                .addChild(nga.menu(adminProvider.getEntity('contractors')))
            )
            .addChild(
                nga.menu(adminProvider.getEntity('departments'))
            )
            .addChild(
                nga.menu(adminProvider.getEntity('counties'))
            )
            .addChild(
                nga.menu(adminProvider.getEntity('offers'))
            );

        admin.menu(menu);

        adminProvider.setConfiguration(admin);
    });

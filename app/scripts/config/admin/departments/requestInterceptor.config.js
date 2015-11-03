'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.controller:departments/requestInterceptor
 * @description
 * Restangular request interceptor configuration for users
 */
angular.module('rscineFrontendApp')

    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {

            if (what === 'departments') {

                if(operation === 'patch' || operation === 'put') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    element = { appbundle_department: element };
                }

                if(operation === 'post') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    element = { appbundle_department: element };
                }

            }

            return { element: element };
        });
    }]);

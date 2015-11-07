'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.controller:users/requestInterceptor
 * @description
 * Restangular request interceptor configuration for users
 */
angular.module('rscineFrontendApp')

    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {

            if (what === 'contractors') {

                if(operation === 'patch' || operation === 'put') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    delete element.department_id;
                    element = { appbundle_contractor_profile: element };
                }

                if(operation === 'post') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    delete element.department_id;
                    element.plainPassword = {first: element.firstPlainPassword, second: element.secondPlainPassword};
                    delete element.firstPlainPassword;
                    delete element.secondPlainPassword;
                    element = { appbundle_contractor_register: element };
                }

            }

            return { element: element };
        });
    }]);

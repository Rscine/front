'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.controller:counties/requestInterceptor
 * @description
 * Restangular request interceptor configuration for users
 */
angular.module('rscineFrontendApp')

    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {

            if (what === 'counties') {

                if(operation === 'patch' || operation === 'put') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    element = { appbundle_user_edit: element };
                }

                if(operation === 'post') {
                    delete element.id; // On supprime l'id (qui n'est pas dans le formulaire de l'api)
                    element.plainPassword = {first: element.firstPlainPassword, second: element.secondPlainPassword};
                    delete element.firstPlainPassword;
                    delete element.secondPlainPassword;
                    element = { appbundle_user_register: element };
                }

            }

            return { element: element };
        });
    }]);

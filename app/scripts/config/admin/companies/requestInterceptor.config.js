'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.controller:companies/requestInterceptor
 * @description
 * Restangular request interceptor configuration for companies
 */
angular.module('rscineFrontendApp')

    .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {

            if (what === 'companies') {

                if(operation === 'patch' || operation === 'put') {
                    delete element.id;
                    element = { appbundle_company: element };
                }

                if(operation === 'post') {
                    delete element.id;
                    element = { appbundle_company: element };
                }

            }

            return { element: element };
        });
    }]);

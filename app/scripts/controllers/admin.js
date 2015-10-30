'use strict';

/**
 * @ngdoc function
 * @name rscineFrontendApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the rscineFrontendApp
 */
angular.module('rscineFrontendApp')

    .config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
         var nga = NgAdminConfigurationProvider;
         // create an admin application
         var admin = nga.application('Rscine Admin Panel')
           .baseApiUrl('http://dev.rscine.com/app_dev.php/');

         var user = nga.entity('users');

         user.listView().fields([
             nga.field('id'),
             nga.field('username'),
             nga.field('email')
         ]);

         admin.addEntity(user);
         // more configuation here later
         // ...
         // attach the admin application to the DOM and run it
         nga.configure(admin);
    }])

    .config(['RestangularProvider', function (RestangularProvider) {
        RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params) {
            if (operation === "getList") {
                // custom pagination params
                if (params._page) {
                    params._start = (params._page - 1) * params._perPage;
                    params._end = params._page * params._perPage;
                }
                delete params._page;
                delete params._perPage;
                // custom sort params
                if (params._sortField) {
                    params._sort = params._sortField;
                    params._order = params._sortDir;
                    delete params._sortField;
                    delete params._sortDir;
                }
                // custom filters
                if (params._filters) {
                    for (var filter in params._filters) {
                        params[filter] = params._filters[filter];
                    }
                    delete params._filters;
                }
            }
            return { params: params };
        });
    }])

    .controller('AdminCtrl', function () {


  });

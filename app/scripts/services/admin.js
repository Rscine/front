'use strict';

/**
 * @ngdoc service
 * @name rscineFrontendApp.admin
 * @description
 * # admin
 * Provider in the rscineFrontendApp.
 */
angular.module('rscineFrontendApp')
  .provider('admin', function (NgAdminConfigurationProvider) {

      var nga = NgAdminConfigurationProvider;
      var admin = nga.application('Rscine Admin Panel Via Provider Dude !!')
         .baseApiUrl('http://rscine.dev/api/');

    /**
     * Gets the ng-admin application
     * @return {[type]} [description]
     */
    this.getApplication = function () {
      return admin;
    };

    /**
     * Sets the configuration with the application modified by each configuration provider
     * @param  {[type]} application [description]
     * @return {[type]}             [description]
     */
    this.setConfiguration = function(application) {
        return nga.configure(application);
    };

    /**
     * Gets the entity named 'name'
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    this.getEntity = function (name) {
        return nga.entity(name);
    };

    // Private constructor
    function Admin() {

    }

    // Method for instantiating
    this.$get = function () {
      return new Admin();
    };

  });

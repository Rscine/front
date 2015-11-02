'use strict';

describe('Service: admin', function () {

  // instantiate service
  var admin,
    init = function () {
      inject(function (_admin_) {
        admin = _admin_;
      });
    };

  // load the service's module
  beforeEach(module('rscineFrontendApp'));

  it('should do something', function () {
    init();

    expect(!!admin).toBe(true);
  });

  it('should be configurable', function () {
    module(function (adminProvider) {
      adminProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(admin.greet()).toEqual('Lorem ipsum');
  });

});

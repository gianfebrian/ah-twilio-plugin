var chai = require('chai'),
  expect = chai.expect,
  factories = require('chai-factories'),
  should = require('should'),
  _ = require('lodash'),
  setup = require('./../_setup.js')._setup;

describe('unit', function() {
  before(function(done) {
    chai.use(factories);
    require('./../factories/sms')(chai);

    setup.init(done);
  });

  describe('twilio', function() {
    it('twilio.buildParams (default sms)', function() {
      var sms = chai.create('sms');
      _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
      var template = _.template(setup.api.config.twilio.template.default);

      var expectedObj = _.extend({
        from: setup.api.config.twilio.from.default,
        body: template(sms.config.template.data),
        url: ''
      }, sms);

      var params = setup.api.twilio.buildParams(sms);

      expect(params).to.eql(expectedObj);
    });
  });
});

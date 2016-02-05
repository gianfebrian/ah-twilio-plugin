exports.task = {
  name: 'defaultTwilioSMSQueue',
  description: '',
  frequency: 0,
  queue: 'default',
  plugins: [],
  pluginOptions: {},

  run: function(api, params, next) {
    api.twilio.sendSms(params, function(err, result) {
      // failover implementation
      next(err, result);
    });
  }
};

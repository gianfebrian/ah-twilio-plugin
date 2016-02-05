exports.task = {
  name: 'defaultTwilioCallQueue',
  description: '',
  frequency: 0,
  queue: 'default',
  plugins: [],
  pluginOptions: {},

  run: function(api, params, next) {
    api.twilio.makeCall(params, function(err, result) {
      // failover implementation
      next(err, result);
    });
  }
};

var twilio = require('twilio'),
  _ = require('lodash');

module.exports = {
  loadPriority: 1000,
  startPriority: 1000,
  stopPriority: 1000,
  initialize: function(api, next) {
    var config = api.config.twilio;
    
    api.twilio = twilio(config.SID, config.AUTH_TOKEN);
    api.twilio.buildParams = function(options) {
      options = options || {};
      options.from = options.from || config.from[options.config.from || 'default'];
      options.url = options.url || config.url[options.config.url || 'defaut'] || '';
      options.body = options.body || config.template[(options.config.template || {}).name || 'default'] || '';

      _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
      var template = _.template(options.body);
      options.body = template((options.config.template || {}).data || {});
      return options;
    };

    var queueTasks = {
      sms: 'defaultTwilioSMSQueue',
      call: 'defaultTwilioCallQueue'
    };

    api.twilio.queueIt = function(options, callback) {
      if (!options.queueType && !options.taskName) 
        return callback('queueType or taskName is empty');

      options.taskName = options.taskName || queueTasks[options.queueType];
      api.tasks.enqueue(options.taskName, options.params, callback);
    };

    next();
  }
};

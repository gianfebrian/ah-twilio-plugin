exports.default = {
  twilio: function(api) {
    return {
      // your Twilio SID.
      SID: 'ACda77f00b0b0debee92c3d1de22bc0f8c',
      // your Twilio Auth Token.
      AUTH_TOKEN: '01ee331430bb729185230ec15849515e',
      // list of predefined from numbers. It will be used when you call buildOptions method for sending sms/message.
      from: {
        default: '+16468879888'
        // add more here. if you have more than one twilio number
      },
      // list of predefined urls. It will be used when you call buildOptions method for making a call. 
      url: {
        default: ''
      },
      // sms body template
      template: {
        default: 'Hello {{ name }}',
        hello: 'Hello {{ name }}'
      }
    }
  }
};

// uncomment below config if you need to run your app in specific environment.

// exports.development = {
//   twilio: function(api) {
//     return {
//       // your Twilio SID.
//       SID: '',
//       // your Twilio Auth Token.
//       AUTH_TOKEN: 'gcm_token_key',
//       // list of predefined from numbers. It will be used when you call buildOptions method for sending sms/message.
//       from: {
//         default: ''
//         // add more here. if you have more than one twilio number
//       },
//       // list of predefined urls. It will be used when you call buildOptions method for making a call. 
//       url: {
//         default: ''
//       },
//       // sms body template
//       template: {
//         hello: 'Hello {{ name }}'
//       }
//     }
//   }
// };

// exports.test = {
//   twilio: function(api) {
//     return {
//       // your Twilio SID.
//       SID: '',
//       // your Twilio Auth Token.
//       AUTH_TOKEN: 'gcm_token_key',
//       // list of predefined from numbers. It will be used when you call buildOptions method for sending sms/message.
//       from: {
//         default: ''
//         // add more here. if you have more than one twilio number
//       },
//       // list of predefined urls. It will be used when you call buildOptions method for making a call. 
//       url: {
//         default: ''
//       },
//       // sms body template
//       template: {
//         hello: 'Hello {{ name }}'
//       }
//     }
//   }
// };

// exports.production = {
//   twilio: function(api) {
//     return {
//       // your Twilio SID.
//       SID: '',
//       // your Twilio Auth Token.
//       AUTH_TOKEN: 'gcm_token_key',
//       // list of predefined from numbers. It will be used when you call buildOptions method for sending sms/message.
//       from: {
//         default: ''
//         // add more here. if you have more than one twilio number
//       },
//       // list of predefined urls. It will be used when you call buildOptions method for making a call. 
//       url: {
//         default: ''
//       },
//       // sms body template
//       template: {
//         hello: 'Hello {{ name }}'
//       }
//     }
//   }
// };
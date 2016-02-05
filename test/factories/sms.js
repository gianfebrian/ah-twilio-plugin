var faker = require('faker');

module.exports = function(chai) {
  chai.factory('sms', {
    to: faker.phone.phoneNumberFormat(),
    config: {
      template: {
        name: 'hello',
        data: {
          name: faker.name.firstName()
        }
      }
    }
  });
}

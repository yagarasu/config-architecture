var Config = require('../lib/index').default;
var ConfigSchema = require('../lib/index').ConfigSchema;
var Drivers = require('../lib/drivers').default;
var JsonDriver = Drivers.JsonDriver;
var path = require('path');

var cs = new ConfigSchema({
  simple: 'string',
  withType: { type: 'number' },
  nested: {
    foo: 'boolean',
    bar: 'boolean'
  },
  validated: {
    type: 'string',
    validate: function (value, expect) {
      expect(value).to.match(/^https?\:\/\//)
    }
  }
});

Config.schema(cs)
  .addSource(new JsonDriver(path.join(__dirname, './config/default.json')));

console.log(Config.get('validated', 'notfound'))

Config.validate();

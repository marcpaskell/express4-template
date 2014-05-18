var models = require('mongoose-models');

var User = models.create('User', {
  // If this is given and truthy, the mongoose-types timestamps
  // plugin will be loaded for this model creating automatically
  // updating 'createdAt' and 'updatedAt' properties
  useTimestamps: true,

  methods: {
      sendEmail: function (subject, msg) {
          //someMailingLib.sendEmail(this.email, subject, msg);
      }
    },

    schema: {
      email: models.types.Email,
      username: String,
      password: String,
      createdAt: {type: Date, default: Date.now}
    }
  }

);

module.exports = User;

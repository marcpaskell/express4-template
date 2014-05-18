var models = require('mongoose-models');

var Post = models.create('Post', {
    // If this is given and truthy, the mongoose-types timestamps
    // plugin will be loaded for this model creating automatically
    // updating 'createdAt' and 'updatedAt' properties
    useTimestamps: true,

    // Define your mongoose schema here
    schema: {
        content: String,
        updated: Date,
        user: {
            type: models.types.ObjectId,
            ref: 'users'
          }
        }
      }
);

module.exports = Post;

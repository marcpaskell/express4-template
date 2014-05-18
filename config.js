var config = {
  development: {
    mode: 'development',
    server: {
      port: 3000
    },
    database: {
      url: 'mongodb://localhost/test_dev'
    }
  },
  testing: {
    mode: 'testing',
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/test_test'
    }
  },
  production: {
    'mode': 'production',
    server: {
      port: 8080
    },
    database: {
      url: 'mongodb://localhost/test'
    }
  }
};

/**
 * Turned into a function to allow explicit config requests during unit testing.
 *
 * @param mode String representation of the config environment desired, e.g. development // testing // production
 * @returns {array} config settings for the chosen environment type.
 */
module.exports = function (mode) {
    return config[mode || process.env.NODE_ENV || 'development'] || config.development;
  };

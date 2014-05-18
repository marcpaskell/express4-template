/**
 * do something with the user model
 * var User = require('../models/user');
 */


var BaseController = require('./Base'),
    View = require('../views/Base');

module.exports = BaseController.extend({
    name: 'Home',
    home: function (req, res, next) {
        res.render('index', {
            title: 'New Home!!!',
            description: 'Awesome home'
          });
        next();
      },
    hiddenHome: function (req, res, next) {
        res.render('index', {
            title: 'New Hidden Home!!!',
            description: 'Awesome hidden home'
          });
        next();
      }
  });
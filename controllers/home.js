/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.home = function (req, res) {
  res.render('index', {
    title: 'New Home!!!',
    description: 'Awesome home'
  });
};

exports.hiddenHome = function (req, res) {
  res.render('index', {
    title: 'New Hidden Home!!!',
    description: 'Awesome hidden home'
  });
};


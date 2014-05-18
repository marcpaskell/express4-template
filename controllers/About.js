/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.about = function (req, res) {

	console.log('about controller start');

  res.render('index', {
    title: 'New About!!!',
    description: 'Awesome about'
  });
};

/**
 * Module dependencies
 */
var express = require('express'),
    controller = require('../controllers/home');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var router = express.Router();

// route middleware that will happen on every request
router.use(function (req, res, next) {

	// log each request to the console
	console.log('Home Req - ' + req.method, req.url);

	// continue doing what we were doing and go to the route
	next();
});

/**
 * this accepts all request methods to the `/` path
 */
router.route('/')
  .get(controller.home)
  .post(controller.hiddenHome);

exports.router = router;

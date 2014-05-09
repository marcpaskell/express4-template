/**
 * Module dependencies
 */
var express = require('express'),
    controller = require('../controllers/about');

console.log('about router start');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var router = express.Router();

/**
 * this accepts all request methods to the `/` path
 */
router.route('/')
  .all(controller.about);

exports.router = router;

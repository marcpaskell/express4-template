/**
 * Module dependencies
 */
var express = require('express'),
    controller = require('../controllers/blog');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var router = express.Router();

/**
 * this accepts all request methods to the `/` path
 */

router.route('/')
  .all(controller.list);
router.route('/create')
	.post(controller.create);
router.route('/remove/:id')
	.get(controller.remove);


exports.router = router;

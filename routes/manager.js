
var app = require('../app');

console.log('manager.js start');

var about = require('./about');
app.use('/about', about.router);

var blog = require('./blog');
app.use('/blog', blog.router);

var home = require('./home');
app.use('/', home.router);
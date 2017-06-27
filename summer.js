/*
 * summernode - demo front end for Acquia Reservoir test based on 
 * https://blog.openlucius.com/en/blog/headless-drupal-nodejs-part-33-express-js-and-drupal-api-integration
 */

var express = require('express');
app = express();
var routes = require('./routes/index.js');

app.set('view engine','ejs');

var server = app.listen(2000, function() {
  console.log('Listening on 2000');
});

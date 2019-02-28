/**
 * Import express
 * Import api-routes
 * Import Mongoose
 * Import BodyParser
 * Import .env
 */
const express = require('express');
const apiRoutes = require("./api-routes"); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

/**
 * Init the App
 */
const app = express();
/**
 * Use Api routes in the App add the URL /api
 */
app.use('/api', apiRoutes)
/**
 * Setup the port
 */
const port = process.env.PORT || 8080;
/** 
 * Configure bodyparser to handle post requests
*/
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/**
 *  Connect to Mongoose and set connection variable 
*/
mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;




/**
 * Send message for default URL /
 */
app.get('/', (req, res) => res.send('Hello World with Express'));
/**
 * Start the app given that port
 */
app.listen(port, () => {
     console.log("Running on http://localhost:" + port);
});

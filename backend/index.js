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
 * Setup the port
 * Configure bodyparser to handle post requests
 */
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const myenv = process.env;
const mongoDBURI = `mongodb://${myenv.DB_USER}:${myenv.DB_PASS}@${myenv.DB_URI}`
mongoose.connect(mongoDBURI,{ useNewUrlParser: true });
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

/**
 * Send message for default URL /
  Use Api routes in the App add the URL /api
 */
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)
/**
 * Start the app given that port
 */
app.listen(port, () => {
     console.log("Running on http://localhost:" + port);
});



//index.js
const express = require('express');
const apiRoutes = require("./api-routes"); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Init the App
const app = express();
// Stablish the connection to mlab

const myenv = process.env;
const mongoDBURI = `mongodb://${myenv.DB_USER}:${myenv.DB_PASS}@${myenv.DB_URI}`
mongoose.connect(mongoDBURI,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log('MongoDB connection error: ',err));

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
//  Use Api routes in the App add the URL /api
app.use('/api', apiRoutes)

// Setup the port and start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
     console.log("Running on http://localhost:" + port);
});

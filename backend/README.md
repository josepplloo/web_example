Backend
=========
   
  This app demonstrates a simple API implementation with NodeJs, Express and MongoDB.

  This example was made based on this tutorial [<b>How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb</b>](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d).
    
**⚠️ Warning ⚠️** Be careful with this tutorial:
  * 🐛 It does not have a proper error handler.
  * 🐞 It does not have a good code format style.
  * 🐌 It uses Callbacks instead of Promises.
  * ✅ But it has a nice file structure.

  In order to write a beter code I recomend the follow lectures about API construction and ES 6 promise:
  
  * [Converting a callback to a promise.](https://www.xul.fr/javascript/callback-to-promise.php)

  * [Creating a REST API with Express.js and MongoDB](https://www.robinwieruch.de/mongodb-express-node-rest-api/)

  * [How to prevent callback hell and forest fire](http://callbackhell.com/) 
  
  # Tecnologies. 

  **Mongoose** is a Nodejs package for modeling Mongodb. It helps you handle validation and business logic for mongodb on Nodejs.

  **Body-parser** enables your app to parse data from incoming request like form data via `urlencode`.

  **Axios** is a Promise based HTTP client for the browser and node.js

  # Project Set Up

  The application runs in `npm 6.8.0` and `node v8.9.3`.

  Install node dependencies executing `npm install`.

  You can run the app locally running `npm start`.

# Endpoints.

The `api` URI preceeds all API endpoints(e.g. `http://localhost:8080/api/providers`) and the following endpoints are currently available:
  * GET `/api/providers`
  * POST `/api/providers`
  * GET `/api/providers/:id`
  * PUT `/api/providers/:id`
  * DELETE `/api/providers/:id`


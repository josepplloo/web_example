Backend
=========

  An app demonstrating simple API implementation with NodeJs, Express and MongoDb

  The `api` uri preceeds all API endpoints(e.g. `http://localhost:8080/api/providers`) and the following endpoints are currently available:
  * GET `/api/providers`
  * POST `/api/providers`
  * GET `/api/providers/:id`
  * PUT `/api/providers/:id`
  * DELETE `/api/providers/:id`

  The companion tutorial on building can be found here [<b>How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb</b>](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d).

  # Tecnologies Used

  **Mongoose** is Nodejs package for modeling Mongodb. It helps you handle validation and business logic for mongodb on Nodejs. You can learn more here.

  **Body-parser** enables your app to parse data from incoming request like form data via urlencode. We need to import this to our app and use them.

  **axios** Promise based HTTP client for the browser and node.js

  # Project Set Up
  It application runs over `npm 5.6.0` and `node v8.9.3`.

  First of all please install the follow dependencies, also you should
  check the `package.json` file.

    "dependencies": {
      "axios": "^0.18.0",
      "body-parser": "^1.18.3",
      "dotenv": "^6.2.0",
      "express": "^4.16.4",
      "mongoose": "^5.4.16",
      "promise": "^8.0.2"
    }

  Next you can run the app with `npm start` script and test with
  `npm test` the tests are in one file, feel free to explore
  and add the info that does you need. *All Test are functionals,* 
  *Delete test fails if the data had has erased before.* 

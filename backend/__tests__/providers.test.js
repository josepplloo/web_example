const axios = require('axios');
require('promise/polyfill-done');
const urlAPI = 'http://localhost:8080/api/providers'

axios.get(urlAPI)
.then((response) => {
  console.log(response.data,'...Data recived');
  return response;
})
.catch(function (error) {
  console.log("Maybe the server is not running ...",error);
})
.done();



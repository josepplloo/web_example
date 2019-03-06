const axios = require('axios');

require('promise/polyfill-done');

const urlAPI = 'http://localhost:8080/api/providers'


/*
 * Get All data from the API
 */
axios.get(urlAPI)
.then((response) => {
  console.log('Test 1... All data recived');
  return response;
})
.catch(function (error) {
  console.error("Test 1: Maybe the server is not running ...",error.message);
})
.done();

/**
 * get one from API
 */
axios.get(urlAPI+'/59c91a1f56fd344c4d82b671')
.then((response) => {
  console.log('Test 2... One data recived');
  return response;
})
.catch(function (error) {
  console.error("Test 2: Maybe the server is not running ...",error.message);
})
.done(); 

/**
 * Create one document
 */
const providerTest = {
  firstName: 'Dolores',
  lastName : 'Abernathy',
  middleName : 'Wyatt',
  email : 'deathbringer@westworld.tv',
  employerId: '999'
};

axios.post(urlAPI,providerTest)
  .then((response) => {
    console.log('Test 3 ... Creating data ',response.data);
    return response;
  }).catch(function (error) {
    console.error("Test 3: Maybe the server is not running ...",error.message);
  })
  .done();

/**
 * Update one document 
 * Original document was
 *  { _id: '59c91a1f56fd344c4d82b671',
     firstName: 'Ava',
     lastName: 'Pfeffer',
     middleName: 'E',
     email: 'Phoebe_Cruickshank@yahoo.com',
     specialty: 
      { _id: '59c919d356fd344c4d82b5e9',
        name: 'Adolescent Medicine',
        createdBy: 55301,
        createdAt: '2017-05-01T20:18:24.148Z',
        updatedBy: 43256,
        updatedAt: '2017-09-24T16:46:29.234Z' },
     projectedStartDate: '2017-02-14T21:37:59.170Z',
     employerId: 334,
     providerType: 'MD',
     staffStatus: 'COURTESY',
     assignedTo: null,
     status: 'DENIED',
     createdBy: 52715,
     createdAt: '2016-12-17T22:40:07.638Z',
     updatedBy: 55115,
     updatedAt: '2017-09-24T16:00:35.298Z' } }
 */
axios
  .put(urlAPI+'/5c7bf718574bd904e7f59a74', providerTest)
  .then((response) => {
    console.log('Test 4 Updating data...',response.data);
    return response;
  }).catch(function (error) {
    console.error("Test 4: Maybe the server is not running ...",error.message);
  })
  .done();
/**
 * Delete same document
 *  */  
axios.delete
(urlAPI+'/59c91a1f56fd344c4d82b671')
.then((response) => {
  console.log('Test 5 erasing data...');
  return response;
})
.catch(function (error) {
  console.error("Test 5: Maybe the server is not running ...",error.message);
})
.done(); 
//api-routes

const router = require('express').Router();
const collectionController = require('./collectionController');

// Set a default API response.
router.get('/', async (req, res) => {
  const response = await res.json({
    status: 'API Its Working',
    message: 'Welcome !'
  });
  return response;
});

router.get('/providers', async (req, res) => {
  const response = await collectionController.index(req, res);
  return response;
});

router.post('/providers', async (req, res) => {
  const response = await collectionController.new(req, res);
  return response;
});

router.get('/providers/:provider_id', async (req, res) => {
  const response = await collectionController.view(req, res);
  return response;
});

router.put('/providers/:provider_id', async (req, res) => {
  const response = await collectionController.update(req, res);
  return response;
});

router.delete('/providers/:provider_id', async (req, res) => {
  const response = await collectionController.delete(req, res);
  return response;
});

module.exports = router;
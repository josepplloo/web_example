/**
 * Initialize express router
 * Import collection controller
 */
const router = require('express').Router();
const collectionController = require('./collectionController');


/**
 * Set a default API response.
 */
router.get('/', 
  (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome !'
      });
});

router.route('/providers')
.get(collectionController.index)

router.route('/providers/:provider_id')    
.get(collectionController.view)
/*
router.route('/providers')
    .get(collectionController.index)  
   .post(collectionController.new);
router.route('/collections/:collection_id')
    .get(collectionController.view)
    .patch(collectionController.update)
    .put(collectionController.update)
    .delete(collectionController.delete); */
// Export API routes
module.exports = router;
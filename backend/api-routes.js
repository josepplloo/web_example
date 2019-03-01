/**
 * Initialize express router
 */
const router = require('express').Router();

/**
 * Set a default API response.
 */
router.get('/', 
  (req, res) => {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!'
      });
});


// Import collection controller
var collectionController = require('./collectionController');
// collection routes
router.route('/collections')
    .get(collectionController.index)
/*     .post(collectionController.new);
router.route('/collections/:collection_id')
    .get(collectionController.view)
    .patch(collectionController.update)
    .put(collectionController.update)
    .delete(collectionController.delete); */
// Export API routes
module.exports = router;
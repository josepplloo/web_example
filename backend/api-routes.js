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

module.exports = router;
var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var tesla_controller = require('../controllers/tesla');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// tesla ROUTES ///
// POST request for creating a tesla.
router.post('/tesla', tesla_controller.tesla_create_post);
// DELETE request to delete tesla.
router.delete('/teslas/:id', tesla_controller.tesla_delete);
// PUT request to update tesla.
router.put('/tesla/:id', tesla_controller.tesla_update_put);
// GET request for one tesla.
router.get('/tesla/:id', tesla_controller.tesla_detail);
// GET request for list of all tesla items.
router.get('/tesla', tesla_controller.tesla_list);
/* GET detail tesla page */

module.exports = router;
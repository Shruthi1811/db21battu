var express = require('express');
var router = express.Router();
var tesla_controllers= require('../controllers/tesla');
/* GET home page. */
router.get('/', tesla_controllers.tesla_view_all_Page);

/* GET detail tesla page */ 
router.get('/detail', tesla_controllers.tesla_view_one_Page); 

/* GET create tesla page */ 
router.get('/create', tesla_controllers.tesla_create_Page);
 
router.get('/update', tesla_controllers.tesla_update_Page);

router.get('/delete', tesla_controllers.tesla_delete_Page); 

module.exports = router; 
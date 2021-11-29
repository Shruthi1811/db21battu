var express = require('express');
var router = express.Router();
var tesla_controllers= require('../controllers/tesla');
/* GET home page. */
router.get('/', tesla_controllers.tesla_view_all_Page);



// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET detail tesla page */ 
router.get('/detail', tesla_controllers.tesla_view_one_Page); 

/* GET create tesla page */ 
router.get('/create', secured,tesla_controllers.tesla_create_Page);
 
router.get('/update',secured, tesla_controllers.tesla_update_Page);

router.get('/delete',secured, tesla_controllers.tesla_delete_Page); 


module.exports = router; 
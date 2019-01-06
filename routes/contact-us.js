var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact-us', {page:'Contact Us', menuId:'contact'});
});

module.exports = router;

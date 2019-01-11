var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about-us', {page:'About Us', menuId:'about',flash:req.flash()});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Demo App' });
});
router.post('/',function(req,res){

  res.send(req.body.name);
});

module.exports = router;

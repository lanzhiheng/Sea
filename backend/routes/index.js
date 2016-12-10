var express = require('express');
var router = express.Router();

// override favicon
router.get('/favicon.ico', (req, res) => {
  res.send(200);
});

module.exports = router;

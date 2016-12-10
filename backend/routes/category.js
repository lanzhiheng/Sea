let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'); //mongo connection

/* GET home page. */
router.get('/:category', function(req, res) {
  const category = req.params.category;
  mongoose.model('Article').find({category}, (err, articles) => {
    if (err) {
      console.err('err');
    } else {
      res.send(articles);
    }
  });
});

module.exports = router;

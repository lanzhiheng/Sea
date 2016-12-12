const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose'); //mongo connection

// Get all categories of articles
router.get('/', function(req, res) {
  const mapArticle = (article) => {
    if (article.category) {
      return article.category;
    }
  };

  const callback = (err, articles) => {
    if (err) {
      console.error('err');
    } else {
      res.send({data: _.compact(articles.map(mapArticle))});
    }
  };

  mongoose.model('Article').find({}).select({_id: 0, category: 1}).exec(callback);
});



/* GET home page. */
router.get('/:category', function(req, res) {
  const category = req.params.category;
  mongoose.model('Article').find({category}, (err, articles) => {
    if (err) {
      console.error('err');
    } else {
      res.send(articles);
    }
  });
});

module.exports = router;

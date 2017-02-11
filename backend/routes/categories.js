const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose'); //mongo connection

router.post('/', function(req, res) {
  const categoryName = req.body['category'];

  const callback = (err, items) => {
    if (err) {
      console.error('err');
    } else {
      res.send('finish');
    }
  };

  const Category = mongoose.model('Category');
  Category.find({name: categoryName}).exec(function(err, docs) {
    if (docs.length != 0 || !categoryName || categoryName.match(/^\s*$/)) {
      let message = 'This category name is exists';
      res.setHeader('Content-Type', 'application/json');
      if (!categoryName || categoryName.match(/^\s*$/)) message = 'category name can not be empty';

      res.status(403).send(JSON.stringify({message}));
    } else {
      Category.create({name: categoryName}, callback);
    }
  })
});


// Get all categories of articles
router.get('/', function(req, res) {
  const callback = (err, categories) => {
    if (err) {
      console.error('err');
    } else {
      res.send({data: categories});
    }
  };

  mongoose.model('Category').find({}).select({_id: 0, name: 1}).exec(callback);
});



/* GET home page. */
router.get('/:category/articles', function(req, res) {
  const category = req.params.category;
  mongoose.model('Article').find({category}, (err, articles) => {
    if (err) {
      console.error('err');
    } else {
      res.send({data: articles});
    }
  });
});

module.exports = router;

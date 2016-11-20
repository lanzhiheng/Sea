let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }));

router.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method;
    delete req.body._method;
    return method;
  }

  // alaway return value
  return null;
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.model('Article').find({}, (err, articles) => {
    if (err) {
      console.err('err');
    } else {
      res.send(articles);
    }
  });
});


router.get('/new', (req, res) => {
  res.render('articles/new', {title: "Add New Articles"});
});


router.post('/', (req, res, next) => {
  let title = req.body.title;
  let createdTime = req.body.cratedTime;
  let body = req.body.body;
  let isPost = req.body.isPost;

  mongoose.model('Article').create({title, createdTime, body, isPost}, (err, article) => {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    } else {
      console.log('POST creating new article: ' + article);
      res.redirect("/articles");
    }
  });
});

module.exports = router;

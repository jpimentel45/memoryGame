var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }))
const MongoClient = require('mongodb').MongoClient;
const app = express();
//mongo setup
var db
MongoClient.connect('mongodb+srv://jpimentel45:nauj1994@dailyspecial-ndwdj.gcp.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
  // ... start the server
  if (err) return console.log(err)
  db = database.db('dailySpecial') // whatever your database name is
  app.listen(3001, () => {
    console.log('listening on 3001 mongo')
  })
})


/* GET home page. */
router.get('/', function(req, res, next) {
 
  db.collection('PasadenaDailySpecial').find().toArray(function (err, results) {
    //console.log(results)
    console.log(results)
    // send HTML file populated with quotes here
    //res.render('pasaena.hbs', { special: results })
      //err ? err : doc
    //var specials = res.json({ special: results })
    res.render('index', res.header({ special: results }));
  })
  
});

router.get('/updateSpecial', (req, res, next)=>{
res.render('partials/special')
})

router.post('/updateSpecial', (req, res) => {
  
  console.log(req.body)

  db.collection('PasadenaDailySpecial').save(req.body, (err,result)=>{
 err ? console.log(err) : console.log('saved to DB') 
 res.redirect("/")
  })
 
})
module.exports = router;

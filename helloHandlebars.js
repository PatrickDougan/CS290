var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();


/*
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
*/
//app.set('port', 4254);

var dirname = '/nfs/stak/users/douganp/CS290/CS290-Server-Side-Examples-master/hello-express/';


router.get('/',function(req,res){
	res.sendFile(path.join(dirname+'./views/main.html'));
});

router.get('/stock_list',function(req,res){
	res.sendFile(path.join(dirname+'./views/page2.html'));
});

router.get('/page2.html',function(req,res){
	res.sendFile(path.join(dirname+'./views/page2.html'));
});


router.get('/lookup',function(req,res){
	res.sendFile(path.join(dirname+'./views/page3.html'));
});

router.get('/page3.html',function(req,res){
	res.sendFile(path.join(dirname+'./views/page3.html'));
});


router.get('/references',function(req,res){
	res.sendFile(path.join(dirname+'./views/page4.html'));
});

router.get('/page4.html',function(req,res){
	res.sendFile(path.join(dirname+'./views/page4.html'));
});

router.get('/main.html',function(req,res){
	res.sendFile(path.join(dirname+'./views/main.html'));
});

router.get('/views/table.js',function(req,res){
	res.sendFile(path.join(dirname+'./views/table.js'));
});


router.get('/table.js',function(req,res){
	res.sendFile(path.join(dirname+'./views/table.js'));
});

router.get('/views/main.css',function(req,res){
	res.sendFile(path.join(dirname+'./views/main.css'));
});


router.get('/pic1.jpg',function(req,res){
	res.sendFile(path.join(dirname+'./views/pic1.jpg'));
});

router.get('/pic2.jpg',function(req,res){
	res.sendFile(path.join(dirname+'./views/pic2.jpg'));
});


router.get('/pic3.jpg',function(req,res){
	res.sendFile(path.join(dirname+'./views/pic3.jpg'));
});

router.get('/pic4.jpg',function(req,res){
	res.sendFile(path.join(dirname+'./views/pic4.jpg'));
});


/*
router.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});*/

app.use('/', router);

app.listen(process.env.port || 4254);
console.log('running at port 4254');

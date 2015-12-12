// app/routes.js
module.exports = function(app) {
var Subscribe  = require('../app/models/Subscribe');
app.get('/', function(req, res) {
	res.render('homepage.html'); 
});
app.get('/contact', function(req, res) {
	res.render('contact.html'); 
});
app.get('/partnership', function(req, res) {
	res.render('partnership.html'); 
});
app.post('/subscription',function(req,res){
	var subscription = new Subscribe();
	subscription.name1 = req.body.name1;
	subscription.email = req.body.email;
	subscription.phone_number = req.body.contact;
	subscription.company_name = req.body.company;
	subscription.message = req.body.message;
	subscription.save();
	res.render('homepage.html'); 
});
}

// route middleware to make sure


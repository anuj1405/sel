// app/routes.js
module.exports = function(app) {

app.get('/', function(req, res) {
	res.render('homepage.html'); 
});
app.get('/contact', function(req, res) {
	res.render('contact.html'); 
});
app.get('/partnership', function(req, res) {
	res.render('partnership.html'); 
});
}

// route middleware to make sure


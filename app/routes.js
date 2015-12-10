// app/routes.js
module.exports = function(app) {
app.get('/',function(req,res)
{
	res.send('heeeee');
})
app.get('/aa', function(req, res) {
	res.render('homepage.html'); 
});
}

// route middleware to make sure


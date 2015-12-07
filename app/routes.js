// app/routes.js
module.exports = function(app) {

app.get('/aa', function(request, response) {
	//response.render('index.html');
  response.send('Hello World!')
})
}

// route middleware to make sure


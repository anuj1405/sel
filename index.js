var express = require('express')
var mongoose = require('mongoose')
var app = express()
var bodyParser = require('body-parser')
var configDB = require('./config/database.js')



mongoose.connect(configDB.url); // connect to our database
app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
app.engine('html', require('ejs').renderFile);

require('./app/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

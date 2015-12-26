// app/routes.js
module.exports = function(app) {
var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tqs.janakpuri1@gmail.com',
        pass: 'anujjuna'
    }
});
var Subscribe  = require('../app/models/Subscribe');
app.get('/', function(req, res) {
	res.render('index.html'); 
});
app.get('/contact', function(req, res) {
	res.render('contact.html'); 
});
app.get('/partnership', function(req, res) {
	res.render('partnership.html'); 
});
app.get('/llp',function(req,res){
	res.render('llp.html')
})
app.get('/pay',function(req,res){
	res.render('pay.html')
})
app.get('/plc',function(req,res){
	res.render('plc.html')
})
app.get('/properitorship',function(req,res){
	res.render('properitorship.html')
})
app.post('/subscription',function(req,res){
	var subscription = new Subscribe();
	subscription.name1 = req.body.name1;
	subscription.email = req.body.email;
	subscription.phone_number = req.body.contact;
	subscription.company_name = req.body.company;
	subscription.message = req.body.message;
	subscription.save();
	
	var mailOptions = {
	    from: 'Legalman<support@legalman.com>', // sender address 
	    to: subscription.email, // list of receivers 
	    subject: 'New Subscription', // Subject line 
	    text: 'Hello text', // plaintext body 
	    html: '<b>Hello world test ✔</b>' // html body 
	};
 
 	transporter.sendMail(mailOptions, function(error, info){
   	 if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
	});
	res.render('homepage.html'); 
});
}

// route middleware to make sure


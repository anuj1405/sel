// app/routes.js
module.exports = function(app) {
var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'team@legalman.in',
        pass: 'legalman*123'
    }
});
var crypto = require('crypto');


    

app.get('/', function(req, res) {
	res.render('home.html'); 
});
app.get('/custom_tshirts', function(req, res) {
	res.render('custom_tshirts.html'); 
});
app.get('/contact', function(req, res) {
	res.render('contact_us.html'); 
});
app.get('/faq', function(req, res) {
	res.render('faq.html'); 
});

app.get('/club', function(req, res) {
	res.render('club.html'); 
});

app.get('/ambclassequestion',function(req,res){
	res.render('club_quiz.html');
})

app.get('/privacy', function(req, res) {
	res.render('privacy.html'); 
});
app.get('/termsandconditions', function(req, res) {
	res.render('termsandconditions.html'); 
});

app.get('/returns', function(req, res) {
	res.render('returns.html'); 
});

app.get('/affiliates', function(req, res) {
	res.render('affiliates.html'); 
});

app.get('/sitemap', function(req, res) {
	res.render('sitemap.html'); 
});

app.use(function(req, res) {
    res.redirect('/')
});

app.post('/subscribe',function(req,res){
	
	var subscription = new Subscribe();
	subscription.email = req.body.email;
	subscription.save();
	
	var mailOptions = {
	    from: 'Legalman<team@legalman.com>', // sender address 
	    to: subscription.email, // list of receivers 
	    subject: 'Legalman Email Subscription', // Subject line 
	    text: 'Hello text', // plaintext body 
	    html: 'Thank you for subscribing to Legalman.in.We are excited to have you as a part of our family. <br>Legalman is an initiative to help entrepreneurs and small business owners start, manage and grow their business with peace of mind at an affordable price.<br> Our aim is to educate the entrepreneur on the legal and regulatory requirements and be a partner throughout the entire business lifecycle, offering support to the company at every stage to make sure they are compliant and continually growing.<br><br>You have been added to our mailing list and now among the first to hear about our new services, events and special offers. <br><br>Start your company registration now<br><br>Have a good day!<br>Team Legalman<br>www.legalman.in' // html body 
	};
 
 	transporter.sendMail(mailOptions, function(error, info){
   	 if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
	});
	res.render('home.html'); 
});



app.post('/subscription',function(req,res){
	var subscription = new Subscribe();

	subscription.name1 = req.body.name1;
	subscription.email = req.body.email;
	subscription.phone_number = req.body.contact;
	subscription.company_name = req.body.company;
	subscription.message = req.body.message;
	subscription.save();
	
	var mailOptions = {
	    from: 'Legalman<team@legalman.com>', // sender address 
	    to: subscription.email, // list of receivers 
	    subject: 'Legalman Email Subscription', // Subject line 
	    text: 'Hello text', // plaintext body 
	    html: 'Thank you for subscribing to Legalman.in.We are excited to have you as a part of our family. <br>Legalman is an initiative to help entrepreneurs and small business owners start, manage and grow their business with peace of mind at an affordable price.<br> Our aim is to educate the entrepreneur on the legal and regulatory requirements and be a partner throughout the entire business lifecycle, offering support to the company at every stage to make sure they are compliant and continually growing.<br><br>You have been added to our mailing list and now among the first to hear about our new services, events and special offers. <br><br>Start your company registration now<br><br>Have a good day!<br>Team Legalman<br>www.legalman.in' // html body 
	};
 
 	transporter.sendMail(mailOptions, function(error, info){
   	 if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
	});
	res.render('home.html'); 
});
}

// route middleware to make sure


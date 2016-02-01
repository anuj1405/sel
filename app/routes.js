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


//payment
// var crypto = require('crypto');
// var randomString = require('random-string');
// function generateSignature(merchantTxnId, request) {
//         //Need to replace the last part of URL("your-vanityUrlPart") with your Testing/Live URL
//         var formPostUrl = "https://sandbox.citruspay.com/sslperf/your-vanityUrlPart";
//         //Need to change with your Secret Key
//         var secret_key = "b2964e4af5f522ddf9774f2ac316abcbbc8dfb14";

//         //Need to change with your Vanity URL Key from the citrus panel
//         var vanityUrl = "teoisvyev8"; 
//         //Should be unique for every transaction
//         var merchantTxnId = randomString({ length: 20 });
//         //Need to change with your Order Amount
//         var orderAmount = "1.00";
//         var currency = "INR";
       

//         // generate hmac
//         var hmac = crypto.createHmac('sha1', secret_key);
//         hmac.update(data);
//         return hmac.digest('hex');
//     }


var Subscribe  = require('../app/models/Subscribe');

app.get('/', function(req, res) {
	res.render('home.html'); 
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
app.get('/payment',function(req,res){
	res.render('payment.html')
})
app.get('/plc',function(req,res){
	res.render('plc.html')
})
app.get('/properitorship',function(req,res){
	res.render('properitorship.html')
})
app.get('/ie-code',function(req,res){
	res.render('IE-code.html')
})
app.get('/fssai',function(req,res){
	res.render('fssai.html')
})
app.get('/ask',function(req,res){
	res.render('ask.html')
})

app.get('/esi',function(req,res){
	res.render('esi.html')
})
app.get('/shop',function(req,res){
	res.render('shop.html')
})
app.get('/msme', function(req, res) {
	res.render('msme.html'); 
});
app.get('/str', function(req, res) {
	res.render('str.html'); 
});
app.get('/vat', function(req, res) {
	res.render('vat.html'); 
});
app.get('/opc', function(req, res) {
	res.render('opc.html'); 
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


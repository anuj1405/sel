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


    
        //Need to replace the last part of URL("your-vanityUrlPart") with your Testing/Live URL
        


//Q9IQHL3SMGZQX6Y1GIGE     91afa5663d99e286eb82d6029e259b9cf5d70270

// function generateSignature() {
//         //Need to replace the last part of URL("your-vanityUrlPart") with your Testing/Live URL
//         var formPostUrl = "https://citruspay.com/sslperf/4pg60pgkby";
//         //Need to change with your Secret Key
//         var secret_key = "91afa5663d99e286eb82d6029e259b9cf5d70270";

//         //Need to change with your Vanity URL Key from the citrus panel
//         var vanityUrl = "4pg60pgkby"; 
//         //Should be unique for every transaction
//         var merchantTxnId = '123456';//randomString({ length: 20 });
//         //Need to change with your Order Amount
//         var orderAmount = "1.00";
//         var currency = "INR";
       

//         // generate hmac

//         var data ='currency=' + currency + 'formPostUrl=' + formPostUrl + 'vanityUrl=' + vanityUrl + '&merchantTxnId=' + merchantTxnId + '&orderAmount=' + orderAmount;
//         var hmac = crypto.createHmac('sha1', secret_key);
//         hmac.update(data);
//         return hmac.digest('hex');
//     }

// function generateSignature(merchantTxnId, request) {
//         //Need to change with your Secret Key
//         var secret_key = "91afa5663d99e286eb82d6029e259b9cf5d70270"; 

//         //Need to change with your Access Key
//         var accesskey = "Q9IQHL3SMGZQX6Y1GIGE"; 

//         //Should be unique for every transaction
//         var txn_id = '123456'; 

//         //Need to change with your Order Amount
//         var amount = "1.00";
//         var data = 'merchantAccessKey=' + accesskey + '&transactionId=' + txn_id + '&amount=' + amount;

//         // generate hmac
//         var hmac = crypto.createHmac('sha1', secret_key);
//         hmac.update(data);
//         return hmac.digest('hex');
//     }


//payment
app.post('/pay',function(req,res){

	var d = new Date();
	var n = d.getTime();
	
	var formPostUrl = "https://sandbox.citruspay.com/legalman";
        //Need to change with your Secret Key
        var secret_key = "c508f973e20f0d96dc0728f9866071abed085248";
        //Need to change with your Vanity URL Key from the citrus panel
        var vanityUrl = "legalman"; 
        //Should be unique for every transaction
        var merchantTxnId = n;
        //Need to change with your Order Amount
        var orderAmount = req.body.price;
        var currency = "INR";
        //Need to change with your Return URL
        var returnURL = "www.amba.herokuapp.com";
        var data = vanityUrl + orderAmount + merchantTxnId + currency;
       
        //Need to change with your Notify URL
        var notifyUrl = "www.amba.herokuapp.com";
        // generate hmac
        var hmac = crypto.createHmac('sha1', secret_key);
        hmac.update(data);
        var securitySignature = hmac.digest('hex');

        // For Coupon signature
      	
       console.log(securitySignature);
	res.render('pay.html',{msg : securitySignature,msg1:n,price:orderAmount})
})



var Subscribe  = require('../app/models/Subscribe');

app.post('/start_business', function(req, res) {
	var par = req.body.category;
	var place = req.body.place;

	res.render(par+'.html',{place:place}); 
});

app.post('/info', function(req, res) {
	// var par = req.body.category;
	// var place = req.body.place;
	var price = req.body.price;
	if(price)
	res.render('payment.html',{price:price});
	else
	res.render('home.html');  
});




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
app.get('/proprietorship',function(req,res){
	res.render('proprietorship.html')
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
app.get('/pan', function(req, res) {
	res.render('pan.html'); 
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


var mongoose = require('mongoose');
// define the schema for our user model
var SubscribeSchema = mongoose.Schema({
	name1	: String,
    email   : String,
    phone_number : Number,
    company_name : String,
    date: { type: Date, default: Date.now },
    message 	: String
});

module.exports = mongoose.model('Subscribe', SubscribeSchema);

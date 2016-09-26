var Mailchimp = require('mailchimp-api-v3');

var config = require ('config');

var API_KEY = config.get ('key');

var mailchimp = new Mailchimp(API_KEY);

mailchimp.post({
    body: require ('campdata')
})
    .then(function (result) {
		
	console.log ('campaign created');

})	
		
	.catch(function (err) {

	console.log(err);

	
})
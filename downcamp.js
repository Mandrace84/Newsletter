var Mailchimp = require('mailchimp-api-v3');

var fs = require ('fs');

var config = require ('config');

var parseJson = require('node-json').parse;

var requireJson = require('node-json').require;

// e la API key dove la prendi?
var API_KEY = '';

var mailchimp = new Mailchimp(API_KEY);

mailchimp.get({
    path : '/campaigns/a6ae2485a7'
})
    .then(function (result) {
		
	fs.writeFile ('c:\test.json', JSON.stringify(result));
		
	requireJson('c:\test.json');
 
    	parseJson();

})	
		
	.catch(function (err) {

	console.log(err);

	
})

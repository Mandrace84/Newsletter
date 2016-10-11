/* define comman line arguments
*/

const commandLineArgs = require('command-line-args');

const optionDefinitions = [

    {name: 'language', alias: 'l', type: String }

]

const options = commandLineArgs(optionDefinitions)

var config = require ('config').get(options.language);

var API_KEY = require ('config').get('key');

var Names = config.get ('names');


var Mailchimp = require('mailchimp-api-v3');

var fs = require ('fs');

var Handlebars = require ('handlebars');

var Campdata = require ('./campdata.js');

var StringDecoder = require('string_decoder').StringDecoder;

var mailchimp = new Mailchimp(API_KEY);


mailchimp.post ({
	
    path : '/campaigns',
    body: Campdata[14] 
})
    
    .then(function (result) {
		
   mailchimp.put ({
	
       path: '/campaigns/' + result.id + '/content',

       body: { html : function() {
	
	   fs.readFile('./templates/template.html', (err, data) => {
  
               if (err) throw err;
	       
               var decoder = new StringDecoder('utf8');
	       
               decoder.write (data); 
  
               var template = Handlebars.compile(decoder.write (data)); 
  
               var risultato = template (Names)
  
	       
           });
  
           return risultato
  
       }
	
	     }
       
   })	
	
	    .then(function (result) {
		
		console.log ('contents created')
		
            })
            .catch(function (err) {
	    
		console.log(err);

            })

		console.log ('campaign created')	
	
    })
	

    .catch(function (err) {
	
	console.log(err); 

	
    })


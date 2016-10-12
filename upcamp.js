/* define comman line arguments
*/

const commandLineArgs = require('command-line-args');

const optionDefinitions = [

    {name: 'language', alias: 'l', type: String }

]

const options = commandLineArgs(optionDefinitions)

var config = require ('config').get(options.language);

var API_KEY = require ('config').get('key');

var Names = require ('config').get ('english.names');


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
     
	 function cont () {
	        
			var risultato = '';
		   
	       var read = fs.readFileSync('./templates/template.html');
  
             var decoder = new StringDecoder('utf8');
	       
            decoder.write (read);   
	       
           var template = Handlebars.compile(decoder.write(read)); 
  
           risultato = template(Names)
  
	      return risultato 	
		  
	 }
	
   mailchimp.put ({
	
       path: '/campaigns/' + result.id + '/content',

       body : {html: cont()}
	
	    
       
   })	
	
	    .then(function (result) {
			
		console.log (result)
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


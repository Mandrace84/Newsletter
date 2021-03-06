const commandLineArgs = require('command-line-args');

const optionDefinitions = [

    {name: 'language', alias: 'l', type: String }

]

const options = commandLineArgs(optionDefinitions)

var config = require ('config').get(options.language);

var API_KEY = require ('config').get('key');

var Names = require ('config').get (options.language + '.names');

var Mailchimp = require('mailchimp-api-v3');

var fs = require ('fs');

var Handlebars = require ('handlebars');

var Campdata = require ('./campdata' + options.language + '.js');

var StringDecoder = require('string_decoder').StringDecoder;

var mailchimp = new Mailchimp(API_KEY);

var array = [];

var secondarray = [];

var datapost = { method : 'post',

path : '/campaigns',

body : ''
};

function sorting () {

    for(var i=0,len=Campdata.length;i<len;i++) {
	
              var buffer = JSON.parse (JSON.stringify (datapost));

              buffer.body = Campdata[i];

              array.push (buffer);

     }

}

sorting ();

mailchimp.batch (array)

.then(function (results) {
				
		     function cont (input) { 
	
			 var risultato = '';
	
            if (input.settings.title.includes ("NEW NO")) {
			 
			     var read = fs.readFileSync ('./templates/' + options.language + '.html');
  
                 var decoder = new StringDecoder('utf8');
	       
                 decoder.write (read);   
	       
                 var template = Handlebars.compile(decoder.write(read)); 
  
                 risultato = template(Names)
			
		        }
		 
	        else if (input.settings.title.includes ("NEW YES")) {
			 
			    var read = fs.readFileSync('./templates/' + options.language + 'ny.html');
  
                var decoder = new StringDecoder('utf8');
	       
                decoder.write (read);   
	       
                var template = Handlebars.compile(decoder.write(read)); 
  
                risultato = template(Names)
			
		       }
		 
	        else {
			 
			     var read = fs.readFileSync('./templates/' + options.language + 'oy.html');
  
                 var decoder = new StringDecoder('utf8');
	       
                 decoder.write (read);   
	       
                 var template = Handlebars.compile(decoder.write(read)); 
  
                  risultato = template(Names)
			
		         }
		 
		    return risultato
		 
	        
			
			 }
			 
		  results.forEach (function (conts) { mailchimp.put 
	     
		 ( '/campaigns/' + conts.id + '/content', { "html": cont(conts) })
		 
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
		
		










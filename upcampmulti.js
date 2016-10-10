
var config = require ('config');

var API_KEY = config.get ('key');

var Names = config.get ('names');

var fs = require ('fs');

var Handlebars = require ('handlebars');

var Campdata = require ('./campdata.js');

var StringDecoder = require('string_decoder').StringDecoder;

var mailchimp = new Mailchimp(API_KEY);

var array = [];

var secondarray = [];

var datapost = { method : 'post',

path = '/campaigns'

body : ''
};

var dataput = { method : 'put',

path = ''

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

mailchimp.batch (array);

.then(function (results) {

           for(var i=0,len=results.length;i<len;i++) {

                    var copy = JSON.parse (JSON.stringify (dataput));

                    copy.path = '/campaigns/' + results[i].id + '/content'

                    copy.body =  { html : function contents () { 
			                      
			               if (results.settings.title.includes ("NEW NO")) {
	
	                                   fs.readFile('./templates/template.html', (err, data) => {
  
                                           if (err) throw err;
  
                                           var decoder = new StringDecoder('utf8');
  
                                           decoder.write (data); 
  
                                           var template = Handlebars.compile(decoder.write (data)); 
  
                                           var risultato = template (Names)
  
  
                                           });
  
                                         };
  
                                       else if (results.settings.title.includes ("NEW YES")) {
		
		                          fs.readFile('./templates/templateny.html', (err, data) => {
  
                                          if (err) throw err;
  
                                          var decoder = new StringDecoder('utf8');
  
                                          decoder.write (data); 
  
                                          var template = Handlebars.compile(decoder.write (data)); 
  
                                          var risultato = template (Names)
  
  
                                               });
  
                                            };

                                        else {
		
		                          fs.readFile('./templates/templateoy.html', (err, data) => {
  
                                          if (err) throw err;
  
                                          var decoder = new StringDecoder('utf8');
  
                                          decoder.write (data); 
  
                                          var template = Handlebars.compile(decoder.write (data)); 
  
                                          var risultato = template (Names)
  
  
                                               });
  
                                              };
  
                                 return risultato
  
                                 };
  
                              };
  
                          secondarray.push (copy);
  
                         };
  
             mailchimp.batch (secondarray);
  
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
		
		










var fs = require ('fs');

var Handlebars = require ('handlebars');

var StringDecoder = require('string_decoder').StringDecoder;

fs.readFile('./template.html', (err, data) => {
  
  if (err) throw err;
  
  var decoder = new StringDecoder('utf8');
  
  decoder.write (data); 
  
  var template= Handlebars.compile(decoder.write (data));
  
  var names = 
  {"date" : "", "linkmainimage" : "", "mainimage" : "", "text" : "", 
   "subject " : "", "itemnumber" : "", "firsttitle" : "", "secondtitle" : "", 
"thirdtitle" : "", "fourthtitle" : "", 
  "link1" : "", "image1" : "", "code1" : "", "price1" : "", "des1" : "", 
  "link2" : "", "image2" : "", "code2" : "", "price2" : "", "des2" : "", 
  "link3" : "", "image3" : "", "code3" : "", "price3" : "", "des3" : "", 
  "link4" : "", "image4" : "", "code4" : "", "price4" : "", "des4" : "", 
  "link5" : "", "image5" : "", "code5" : "", "price5" : "", "des5" : "", 
  "link6" : "", "image6" : "", "code6" : "", "price6" : "", "des6" : "", 
  "link7" : "", "image7" : "", "code7" : "", "price7" : "", "des7" : "", 
  "link8" : "", "image8" : "", "code8" : "", "price8" : "", "des8" : "", 
  "link9" : "", "image9" : "", "code9" : "", "price9" : "", "des9" : "", 
  "link10" : "", "image10" : "", "code10" : "", "price10" : "", "des10" : "", 
  "link11" : "", "image11" : "", "code11" : "", "price11" : "", "des11" : "", 
  "link12" : "", "image12" : "", "code12" : "", "price12" : "", "des12" : "", 
  "link13" : "", "image13" : "", "code13" : "", "price13" : "", "des13" : "", 
  "link14" : "", "image14" : "", "code14" : "", "price14" : "", "des14" : "", 
  "link15" : "", "image15" : "", "code15" : "", "price15" : "", "des15" : "", 
  "link16" : "", "image16" : "", "code16" : "", "price16" : "", "des16" : "", 
  "link17" : "", "image17" : "", "code17" : "", "price17" : "", "des17" : "", 
  "link18" : "", "image18" : "", "code18" : "", "price18" : "", "des18" : "", 
  "link19" : "", "image19" : "", "code19" : "", "price19" : "", "des19" : "", 
  "link20" : "", "image20" : "", "code20" : "", "price20" : "", "des20" : "",
  };  
  
  fs.writeFile  ( 'c:/test.js', template(names));
  
  });
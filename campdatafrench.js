//setup = {
//"listid" : "",
//"title" :  "",
//"segmentid" : "",
// "subject" : "",
//"from_name" : "",
//"reply_to" : "",
//"google" : ""
//};

var config = require ('config');

var Subject = config.get ('french.names.subject');

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var m = month[d.getMonth()];

var y = d.getFullYear ();


var newsletters = [];

var segment = [5237, 5241, 2129];

var campaignname = [];

campaignname[5237] = "Achadirect.com Newsletter Jeab OLD YES Sales French |" + ' ' + m + ' ' + y;
campaignname[5241] = "Achadirect.com Newsletter Jeab NEW YES Sales French |" + ' ' + m + ' ' + y;
campaignname[2129] = "Achadirect.com Newsletter NEW NO Sales French |" + ' ' + m + ' ' + y;


var google =[];

google[5237] = "Achadirect_com_Newsletter_Jeab_O_Y_FR_" + m.substring (0, 3) + "_" + y;
google[5241] = "Achadirect_com_Newsletter_Jeab_N_Y_FR_" + m.substring (0, 3) + "_" + y;
google[2129] = "Achadirect_com_Newsletter_N_N_FR_" + m.substring (0, 3) + "_" + y;


var campdata = {
    "recipients": {
	"list_id": "",
	"segment_opts":{
	    "saved_segment_id": ""
	}
    },
    "settings":{
	"subject_line": Subject,
	"title": "",
	"from_name": "",
	"reply_to":"",
	"use_conversation":false,
	"to_name":"",
	"folder_id":"",
	"authenticate":true,
	"auto_footer":false,
	"inline_css":false,
	"auto_tweet":false,
	"fb_comments":false,
	"timewarp":false,
	"template_id":137,
	"drag_and_drop":true},
    "tracking":{
	"opens":true,
	"html_clicks":true,
	"text_clicks":false,
	"goal_tracking":false,
	"ecomm360":false,
	"google_analytics":"",
	"clicktale":""},
    "social_card":{
	"image_url":"https://gallery.mailchimp.com/22062e500e/images/9e8aa033-7edc-4fdc-916b-9cc79ac81559.png",
	"description":"",
	"title":""},
	"type" : "regular"
};


function parachange () {

    for(var i=0,len=segment.length;i<len;i++) {

	// set buffer object as copy of the campdata "template" object
	// to understand why do like that: http://www.mavenspun.com/javascript/learn-programming/how-to-deep-copy-clone-javascript-object-or-complex-data-structure.htm
	var buffer = JSON.parse (JSON.stringify (campdata)); 

	buffer.settings.title = campaignname[segment[i]];
	
	buffer.tracking.google_analytics = google [segment[i]];

	buffer.recipients.segment_opts.saved_segment_id = segment[i];
	
	if (buffer.settings.title.includes ("NEW NO")) {
	    buffer.recipients.list_id = "2544b5f0a3";
	} else {
	    buffer.recipients.list_id = "18a8a9f068";
	};

	if (buffer.settings.title.includes ("Goog")) {
	    buffer.settings.from_name = "Goog Saengow", buffer.settings.reply_to = "goog@achadirect.com"
	} else if (buffer.settings.title.includes ("Didi")) {
	    buffer.settings.from_name = "Didi Sivaranon", buffer.settings.reply_to = "didi@achadirect.com"
	} else if (buffer.settings.title.includes ("Klaus")) {
		buffer.settings.from_name = "Klaus Ernst", buffer.settings.reply_to = "klaus@achadirect.com"
	} else if (buffer.settings.title.includes ("Namoon")) {
		buffer.settings.from_name = "Lorena Itthipatachai", buffer.settings.reply_to = "lorena@achadirect.com"
	} else if (buffer.settings.title.includes ("Sunny")) {
		buffer.settings.from_name = "Sunny Makkaman", buffer.settings.reply_to = "sunny@achadirect.com"
	} else if (buffer.settings.title.includes ("Jeab")) {
		buffer.settings.from_name = "Wally Rakkasikorn", buffer.settings.reply_to = "wally@achadirect.com"
	} else if (buffer.settings.title.includes ("Tony")) {
		buffer.settings.from_name = "Tony Lhupreechaseth", buffer.settings.reply_to = "tony@achadirect.com"
	} else {buffer.settings.from_name = "Acha Co.,Ltd.", buffer.settings.reply_to = "websales_fr@achadirect.com"
	};
	
	
	
	// add object to array
	newsletters.push(buffer);

    }

}


parachange();

// newsletters.forEach( function(news) { console.log(news); });

module.exports = newsletters

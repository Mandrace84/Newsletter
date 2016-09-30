//setup = {
//"listid" : "",
//"title" :  "",
//"segmentid" : "",
// "subject" : "",
//"seller" : "",
//"reply" : "",
//"google" : ""
//};

var newsletters = [];

var segment = [5149, 5153, 5157, 5161, 5165, 5169, 5173, 5177, 5181, 5185, 5189, 5193, 5197,
	       5201, 2121];

var campaignname = [];

campaignname[5149] = "Achadirect.com Newsletter Goog OLD YES Sales English | September 2016";
campaignname[5153] = "Achadirect.com Newsletter Goog NEW YES Sales English | September 2016";
campaignname[5157] = "Achadirect.com Newsletter Didi OLD YES Sales English | September 2016";
campaignname[5161] = "Achadirect.com Newsletter Didi NEW YES Sales English | September 2016";
campaignname[5165] = "Achadirect.com Newsletter Klaus OLD YES Sales English | September 2016";
campaignname[5169] = "Achadirect.com Newsletter Klaus NEW YES Sales English | September 2016";
campaignname[5173] = "Achadirect.com Newsletter Namoon OLD YES Sales English | September 2016";
campaignname[5177] = "Achadirect.com Newsletter Namoon NEW YES Sales English | September 2016";
campaignname[5181] = "Achadirect.com Newsletter Jeab OLD YES Sales English | September 2016";
campaignname[5185] = "Achadirect.com Newsletter Jeab NEW YES Sales English | September 2016";
campaignname[5189] = "Achadirect.com Newsletter Sunny OLD YES Sales English | September 2016";
campaignname[5193] = "Achadirect.com Newsletter Sunny NEW YES Sales English | September 2016";
campaignname[5197] = "Achadirect.com Newsletter Tony OLD YES Sales English | September 2016";
campaignname[5201] = "Achadirect.com Newsletter Tony NEW YES Sales English | September 2016";
campaignname[2121] = "Achadirect.com Newsletter NEW NO Sales English | September 2016";

var campdata = {
    "recipients": {
	"list_id": "",
	"segment_opts":{
	    "saved_segment_id": ""
	}
    },
    "settings":{
	"subject_line":"",
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
};


function parachange () {

    for(var i=0,len=segment.length;i<len;i++) {

	// set buffer object as copy of the campdata "template" object
	// to understand why do like that: http://www.mavenspun.com/javascript/learn-programming/how-to-deep-copy-clone-javascript-object-or-complex-data-structure.htm
	var buffer = JSON.parse(JSON.stringify( campdata )); 

	buffer.settings.title = campaignname[segment[i]];

	buffer.recipients.segment_opts.saved_segment_id = segment[i];

	if (buffer.settings.title.includes ("NEW NO")) {
	    buffer.recipients.list_id = "2544b5f0a3";
	} else {
	    buffer.recipients.list_id = "18a8a9f068";
	};

	if (buffer.settings.title.includes ("Goog")) {
	    buffer.settings.from_name = "Goog";
	} else {
	    buffer.settings.from_name = "Other";
	};
	
	// add object to array
	newsletters.push(buffer);

    }

}


parachange();

console.log (newsletters);

module.exports = newsletters

//setup = {
//"listid" : "",
 //"title" :  "",
//"segmentid" : "",
// "subject" : "",
 //"seller" : "",
 //"reply" : "",
 //"google" : ""
 //};

var setup = {};
 
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
 
 function parachange () {
	 
	 for(i=0,len=segment.length;i<len;i++) {
		 
		setup.title = campaignname [segment[i]];
		setup.segmentid = segment[i];
	 
	
	if (setup.title.includes ("NEW NO")) { 
	setup.listid = "2544b5f0a3"} else {setup.listid = "18a8a9f068"};
	
	if (setup.title.includes ("Goog")) {
	setup.seller = "Goog"} else {setup.seller = "Other"};
	
	 };	
	 
	 };
	
	 parachange (setup);

var campdata = {
"recipients":
    {"list_id":setup.listid,
     "segment_opts":{ "saved_segment_id": setup.segmentid,
	}},
"settings":{
    "subject_line":"",
    "title":setup.title,
    "from_name":setup.seller,
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
console.log (campdata);

module.exports = campdata
/*
If organization's email box is integrated with service-now then below code will be usefull for you. 
*/
// take email in varibale to convert in lower case to avoid any case sensitivity issue. 
var emailTo = email.to;
emailTo = emailTo.toLowerCase();

//guest user sysID is 5136503cc611227c0183e96598c4d906
//if the person who sent email is not part of oragnization's AD server then opened by field will be set as guest user 

if (current.opened_by == "5136503cc611227c0183e96598c4d906") {
	current.u_external_sender = email.from;
}

// if email was forwarded to "authortechquery@packt.com" ( which reside on organization's exchnage server ) then a copy of email 
//will be sent to service-now instance to create a support ticket.
if (emailTo.indexOf("authortechquery@packt.com") >= 0) {
	// set caller id field on incident form
	current.caller_id = gs.getUserID();
	// set comments field on incident form to email body. 
	current.comments = "forwarded by: " + email.origemail + "\n\n" + email.body_text;
	//set short description field in incident form to email subject 
	current.short_description = email.subject;
	//set category field on incident form to "Author Query"
	current.category = "Author Query";
	// set subcategory on incident form to "Technical Query"
	current.subcategory = "Technical Query";
	//  set sub subcategory field on incident form to " Other"
	current.u_sub_subcategory = "Other";
	//  set business services on incident form as "Technical Book"
	current.u_business_services.setDisplayValue('Technical Book');
	// Set  state field on incident form as "New". New =1 
	current.incident_state = 1;
	// 	Set Notify field on incident form as 2
	current.notify = 2;
	// set contact type field on incident form as "email"	
	current.contact_type = "email";
	// insert the record in table 
	current.insert();
	// stop inbound email action rule after processing. 
	event.state = "stop_processing";

}
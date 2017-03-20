function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading) {
		return;
	}
	// get value in con_end variable
	var con_end = g_form.getValue('u_contract_end_date');
	// call script include from client 
	var ga = new GlideAjax('AuthorRegistration');
	//call function from script include
	ga.addParam('sysparm_name', 'AuthorRegistrationAlert');
	// pass contract end value to script include
	ga.addParam('sysparm_contract_end', con_end);
	//define function to get response from server 
	ga.getXML(AuthorRegistrationParse);

	function AuthorRegistrationParse(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		alert(nswer);
	}
}
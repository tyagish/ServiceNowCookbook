//u_business_software : This is name of variable of "Business Software" field
//task : This is variable by which you can set values in task table.
//variable_pool : catalog items contains many fields/variables. Please keep in mind that variable reside in variable_pool and to access catalog item's field value you need to variable_pool

// If service-now is selected on "Business Software Access" catalog item then task's short description will be Access request for Service-Now business software
if (current.variable_pool.u_business_software == "Service-Now") {
	task.short_description = "Access request for Service-Now business software";

}

// If oracle is selected on "Business Software Access" catalog item then task's short description will be Access request for Access request for Oralce business software
else if (current.variable_pool.u_business_software == "Oracle") {

	task.short_description = "Access request for Oralce business software";
}

//If no options is selected on 	Business Software Access" catalog item then task's short description will be No business software is  selected
else {
	task.short_description = "No business software was selected";


}
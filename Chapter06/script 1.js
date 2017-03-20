//returning fucntion value

answer = ifScript();

// create fucntions or use can ifScript function as well  which is provided by service-now by default 

function ifScript() {

    //check for business software value which is available on request form
    //current : it is a predefined global variable which is provided by service-now.
    //variable_pool : catalog items contains many fields/variables.Please keep in mind that variable reside in variable_pool and to access catalog item's field value you need to variable_pool. 
    //u_business_software.name : it is the variable name which is available in request item name. Here we are taking value of u_business_software and comparing it so the form which is submitted by user contains "your options == "Service-Now"" then "if" activity will return yes for further processing. 

    if (current.variable_pool.u_business_software.name == "your_options") {
        return 'yes';
    }
    return 'no';
}

function checkLogin(){
	if(localStorage.getItem("X-WealthVis-loggedIn")=="true"){
	   
	    if(localStorage.getItem("X-WealthVis-user-type")=="user"){
	        $(location).attr('href', serverDomain);
	    } 

	}
}

function checkRedirectNeeded(){
	if(!localStorage.getItem("X-WealthVis-loggedIn")||!localStorage.getItem("X-WealthVis-session-token")||localStorage.getItem("X-WealthVis-loggedIn")=="false"){//no session records, redirect to login
		$(location).attr('href', serverDomain + 'login.html');
	}
}

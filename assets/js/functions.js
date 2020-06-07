
function setCookie(variable,value,expires_seconds)
{
    var d = new Date();
    d = new Date(d.getTime() + 1000 * expires_seconds);
    document.cookie="name="+ document.getElementById("name").value+ '; expires=' + d.toGMTString() + ";path=/";
    document.cookie="Age="+ document.getElementById("age").value+ '; expires=' + d.toGMTString() + ";path=/";
    document.cookie="Country=" + document.getElementById("country").value + '; expires=' + d.toGMTString() + ";path=/";
	remove(); //calling the method of remove of js
}
 
function getCookie()
{  
	var allcookies = document.cookie;

	cookiearray = allcookies.split(';');
 
	for(var i=0; i<cookiearray.length; i++) 
	{
	  name = cookiearray[i].split('=')[0];
	  value = cookiearray[i].split('=')[1];
	  document.write ( name + " = " + value );
	
	}
}
    
function remove()
{
	document.getElementById("name").value="";
	document.getElementById("age").value="";
	document.getElementById("country").value="";
}
		 
function deleteCookie()
{
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "Age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "Country=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
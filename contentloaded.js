document.addEventListener("DOMContentLoaded", function(){
	var p = document.createElement("p");
	p.innerHTML = "Website designed and programmed entirely by me. <i>Open Sans</i> typeface Copyright Google Inc.";
	document.getElementById("footer").insertBefore(p, document.getElementById("footer").firstChild);
	
	var iconLink = document.createElement("link");
	iconLink.rel = "icon";
	iconLink.href = "http://leo.scruffohio.net/images/favicon.ico";	
	
	document.getElementsByTagName("head")[0].appendChild(iconLink);
	
});

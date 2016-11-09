function tumblrFixes(){
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++){
		var div = divs[i];
		if (div.classList.contains("media-button") && div.classList.contains("media-killer") && div.classList.contains("icon_close")){
			div.parentElement.parentElement.removeChild(div.parentElement.nextSibling);
			div.parentElement.removeChild(div);
		}
		if (div.className.toLowerCase() === "html_photoset"){
			var iframe = div.getElementsByTagName("iframe")[0];
			iframe.style.height = "100%";
			div.style.height = iframe.contentDocument.getElementsByTagName("html")[0].scrollHeight + "px";
		}
	}
}


document.addEventListener("DOMContentLoaded", tumblrFixes);

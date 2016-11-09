function tumblrFixes(){
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++){
		var div = divs[i];
		if (div.classList.contains("media-button") && div.classList.contains("media-killer") && div.classList.contains("icon_close")){
			div.parentElement.removeChild(div.nextElementSibling);
			div.parentElement.removeChild(div);
		}
	}
}


document.addEventListener("DOMContentLoaded", tumblrFixes);

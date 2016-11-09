function fixBlockQuote(bq){
	if (bq.parentElement.tagName.toLowerCase() === "blockquote"){
		var atag = bq.parentElement.firstElementChild.firstElementChild;
		if (atag){
			if (atag.className.toLowerCase() === "tumblr_blog") {
				fixBlockQuote(bq.parentElement);
				var el = bq.parentElement.parentElement;
				var par = bq.parentElement;
				var first = bq.previousElementSibling;
				var second = bq;
				el.insertBefore(second, par.previousElementSibling);
				if (first){
					el.insertBefore(first, second);
				}
				bq.style.borderBottom = "1px";
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		
	} else {
		return false;
	}
}
document.addEventListener("DOMContentLoaded", function(){
	var found = true;
	do {
		found = false;
		var blockQuotes = document.getElementsByTagName("blockquote");

		for (var i = 0; i < blockQuotes.length; i++){
			var bq = blockQuotes[i];
			if (fixBlockQuote(bq)){
				found = true;
			}
		}
	} while (found);
});


function fixBlockQuote(bq){
	if (bq.previousElementSibling.tagName.toLowerCase() === "p" && bq.parentElement.tagName.toLowerCase() === "blockquote"){
		fixBlockQuote(bq.parentElement);
		var el = bq.parentElement.parentElement;
		var par = bq.parentElement;
		var first = bq.previousElementSibling;
		var second = bq;
		el.insertBefore(second, par.previousElementSibling);
		el.insertBefore(first, second);
		return true;
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


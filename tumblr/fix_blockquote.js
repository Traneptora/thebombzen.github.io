function fixBlockQuote(bq){
	if (bq.previousElementSibling.tagName.toLowerCase() === "p" && bq.parentElement.tagName.toLowerCase() === "blockquote"){
		fixBlockQuote(bq.parentElement);
		console.log(bq);
		var el = bq.parentElement.parentElement;
		var third = bq;
		var second = bq.previousElementSibling;
		var first = second.previousElementSibling;;

		el.insertBefore(third, el.firstChild);
		el.insertBefore(second, el.firstChild);
		if (first){
			el.insertBefore(first, el.firstChild);
		}
	}
}
document.addEventListener("DOMContentLoaded", function(){
	var found = true;

	found = false;
	var blockQuotes = document.getElementsByTagName("blockquote");

	for (var i = 0; i < blockQuotes.length; i++){
		var bq = blockQuotes[i];
		fixBlockQuote(bq);
	}
});


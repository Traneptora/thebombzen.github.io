function fixBlockQuote(bq){
	if (bq.previousElementSibling.tagName.toLowerCase() === "p" && bq.parentElement.tagName.toLowerCase() === "blockquote"){
		fixBlockQuote(bq.parentElement);
		console.log(bq);
		var el = bq.parentElement.parentElement;
		var par = bq.parentElement;
		var first = bq.previousElementSibling;
		var second = bq;
		
		el.insertBefore(second, par);
		el.insertBefore(first, par);
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


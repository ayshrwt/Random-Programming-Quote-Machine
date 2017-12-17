
$(document).ready(function(){
	var quote;
	var author;
  $("#getQuote").on("click",function(){

		//Make request to api
		$.ajax({
				url:'http://quotes.stormconsultancy.co.uk/random.json',
		}).done(function(ranQ){
				quote = ranQ.quote;
				author = ranQ.author;
				$("#quote-content").html(`
						<p>${ranQ.quote}</p>
						<p>- ${ranQ.author}</p>
				`);
		});


	});

	$("#tweet").on("click",function() {
			window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
	});


});


$(document).ready(function(){

	

	$("#getQuote").on("click", function(){
     		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data) {

        			$("#quote-content").html("<h4><strong>"+data.quote+"</strong></h4>"+"<p>"+ data.author+"</p>");

    		});
    });





});

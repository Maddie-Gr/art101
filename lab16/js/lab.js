/*
 * Author: Madeleine Graboske
 * Created: 05 / 26 / 2022
 *
 */



 var endpoint = "https://xkcd.com/614/info.0.json";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })
  .done(function(data){
  	$("#output").append("<h3>" + data.title + "</h3>");
  	$("#output").append("<img src=" + data.img + ">" + "<br>");
  	$("#output").append( data.alt );
  })
  .fail(function(request, error){
  	$("#output").html("Something fucked up.");
  })
}

$("button").click(getAjax);

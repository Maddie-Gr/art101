/*
 * Author: Madeleine Graboske
 * Created: 05 / 24 / 2022
 *
 */





 // Getting the URL
 var endpoint = "https://api.kanye.rest";

 //Creating the function
 function getAjax() {
  $.ajax({
    url: endpoint,
    type: "GET"
  })
  .done(function(data){
    $("#output").html("<h3>" + data.quote + "</h3>")
  })
  .fail(function(request, error){
    $("#output").html("Didn't Work.");
  })
 }

 // Creating the button
 $("button").click(getAjax);

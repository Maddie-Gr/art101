/*
 * Author: Madeleine Graboske
 * Created: 05 / 26 / 2022
 *
 */


 {
 "month": "5",
 "num": 2624,
 "link": "",
 "year": "2022",
 "news": "",
 "safe_title": "Voyager Wires",
 "transcript": "",
 "alt": "Also, they're getting increasingly worried that someone will accidentally hit the 'retract' button, and that the end of the cable thrashing around as it winds up could devastate the Earth's surface.",
 "img": "https://imgs.xkcd.com/comics/voyager_wires.png",
 "title": "Voyager Wires",
 "day": "25"
 }
 
 // Getting the URL
 var endpoint = "https://xkcd.com/info.0.json";

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

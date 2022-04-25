/*
 * Author: Madeleine Graboske
 * Created: 04 / 22 / 2022
 *
 */

 //Define Variables

 myTransport = ["Prius ", "plane ", "rides from friends"];

 myMainRide = {
   make : "Prius",
   model : "Prime",
   color : "White",
   year : 2017,
   age : function() {
     return 2022 - year;
   }
 }

 //output
 document.writeln("Transportation I use: ", myTransport, "</br");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

/*
 * Author: Madeleine Graboske
 * Created: 05 / 09 / 2022
 *
 */

//create button and add to section

$("#challenge").append("<button id='chal'>Button</button>");
$("#problem").append("<button id='prob'>Button</button>");
$("#results").append("<button id='res'>Button</button>");

$("#chal").click(function(){
  // find the section, toggle a class
  // $("#challenge").toggleClass("special");

  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("new");
})

$("#res").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("new2");
})

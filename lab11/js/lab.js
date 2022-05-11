/*
 * Author: Madeleine Graboske
 * Created: 05 / 09 / 2022
 *
 */

//create button and add to section
$("#problem").append("<button id='prob'>Button</button>");
$("#challenge").append("<button id='chal'>Button</button>");
$("#results").append("<button id='res'>Button</button>");

$("#prob").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("new3");
})

$("#chal").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("new");
})

$("#res").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("new2");
})

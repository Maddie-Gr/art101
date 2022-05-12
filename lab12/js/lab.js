/*
 * Author: Madeleine Graboske
 * Created: 05 / 12 / 2022
 *
 */


 //return hogwarts house
function sortingHat(str) {
  len = str.length;
  mod = len % 4

  if (mod == 0) {
    return "Slytherin: " +   "a house that values ambition, leadership, self-preservation, cunning and resourcefullness."
  }
  else if (mod == 1) {
    return "Gryffindor: " + "a house that values bravery, daring, nerve, and chivalry."
  }
  else if (mod == 2) {
    return "Hufflepuff: " + "a house that values hard work, dedication, patience, loyalty, and fair play."
  }
  else if (mod == 3) {
    return "Ravenclaw: " + "a house that values intelligence, knowledge, curiosity, creativity and wit."
  }
}

var myButton = document.getElementById("button")
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  answer = "<p> You have been placed in " +house +"</p";
  document.getElementById("output").innerHTML = answer;


})

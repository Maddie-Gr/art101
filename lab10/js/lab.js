/*
 * Author: Madeleine Graboske
 * Created: 05 / 05 / 2022
 *
 */

//make it so prompt is on page and not a popup

//Variables
  var button = document.getElementById("button");
  var output = document.getElementById("output");

//button listener
  button.addEventListener("click", function(){
    var name = document.getElementById("name").value;
    //split
    var nameArray = name.split('');
    //sort
    var nameArraySort = nameArray.sort();
    //join
    var nameSorted = nameArraySort.join('');
    output.innerHTML = nameSorted;
  });

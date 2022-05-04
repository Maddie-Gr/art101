/*
 * Author: Madeleine Graboske
 * Created: 05 / 02 / 2022
 *
 */

//changing css aspects
var ccont = document.getElementById("content").style.color = "white";
var sCo = document.getElementById("scriptOutput").style.color = "red";
 

//declaring element variables
 var outputEl = document.getElementById("div1");
 var new1El = document.createElement("p");

 //changing inner HTML
 new1El.innerHTML = "Something New";
 var new2El = document.createElement("p");
 new2El.innerHTML = "Something Else";

 //append both elements
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

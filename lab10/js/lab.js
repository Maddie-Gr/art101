/*
 * Author: Madeleine Graboske
 * Created: 05 / 05 / 2022
 *
 */

//make it so prompt is on page and not a popup
 function myfunc(){
   var userName = window.prompt("Hello! Please tell me your name! (You can trust me :D)");


     console.log("userName =", userName);
     //split time
     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);
     //sort
     var sortnameArray = nameArray.sort();
     console.log("sortnameArray =", sortnameArray);
     //join
     var nameSorted = sortnameArray.join('');
     console.log("nameSorted =", nameSorted);
     return (nameSorted);

 }
 //output
 document.writeln("I have taken your name, it is mine now. You shall now be known as, ",
   myfunc(), "</br>");

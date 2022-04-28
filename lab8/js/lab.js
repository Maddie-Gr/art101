/*
 * Author: Madeleine Graboske
 * Created: 04 / 28 / 2022
 *
 */

function isOdd(x){
  return (x % 2 != 0);
}

function isEven(x){
  return (x % 2 == 0);
}

//testing testing
console.log("Is 35 even? ", isEven(35));
console.log("Is 35 odd? ", isOdd(35));

array = [35, 124, 5213, 342, 95, 18]
console.log("The coolest array ever", array)

var result = array.map(isEven);
//should return: false, true, false, true, false trust
console.log("Testing the evenness array:", result);

var resultToo = array.map(isOdd);
//should return opposite of previous result
console.log("Testing the oddness arrray:", resultToo);

var result = array.map(function(x){
  return x * 7;
});
console.log("Array multiplied by 7:", result);

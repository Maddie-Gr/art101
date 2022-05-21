/*
 * Author: Madeleine Graboske
 * Created: 05 / 16 / 2022
 *
 */

console.log("exists")


  var imgArray= new Array();

    imgArray[0] = new Image();
    imgArray[0].src = './img/boardwalk.png';

    imgArray[1] = new Image();
    imgArray[1].src = './img/bowling.png';

    imgArray[2] = new Image();
    imgArray[2].src = './img/kayaking.png';

    imgArray[3] = new Image();
    imgArray[3].src = './img/mysterySpot.png';

    imgArray[4] = new Image();
    imgArray[4].src = './img/porter caves.png';

    imgArray[5] = new Image();
    imgArray[5].src = './img/ppbeach.png';

    function nextImage(){
        var img = document.getElementById("fortune");
        for(var i = 0; i < imgArray.length;i++){
            if(imgArray[i].src == img.src){
                if(i === imgArray.length){
                    document.getElementById("fortune").src = imgArray[0].src;
                    break;
                }
                document.getElementById("fortune").src = imgArray[i+1].src;
                break;
            }
        }
    }
    function previousImage(){
        var img = document.getElementById("fortune");
        for(var i = imgArray.length-1; i >=0 ;i--){
            if(imgArray[i].src == img.src){
                if(i === imgArray.length){
                    document.getElementById("fortune").src = imgArray[4].src;
                    break;
                }
                document.getElementById("fortune").src = imgArray[i-1].src;
                break;
            }
        }
    }

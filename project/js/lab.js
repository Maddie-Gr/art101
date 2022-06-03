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

    imgArray[6] = new Image();
    imgArray[6].src = './img/aboretum.png';

    imgArray[7] = new Image();
    imgArray[7].src = './img/blueLagoon.png';

    imgArray[8] = new Image();
    imgArray[8].src = './img/farmersMarket.png';

    imgArray[9] = new Image();
    imgArray[9].src = './img/train.png';

    imgArray[10] = new Image();
    imgArray[10].src = './img/rollerskating.png';

    imgArray[11] = new Image();
    imgArray[11].src = './img/bookstore.png';

    imgArray[12] = new Image();
    imgArray[12].src = './img/whaleWatching.png';

    imgArray[13] = new Image();
    imgArray[13].src = './img/survival.png';

    imgArray[14] = new Image();
    imgArray[14].src = './img/marineCenter.png';



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

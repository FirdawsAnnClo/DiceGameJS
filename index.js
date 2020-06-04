


var randomNumber1 = Math.floor((Math.random() * 7) + 1);


var fileSource = "images/dice"+ randomNumber1 +".png"

console.log('fileSource', fileSource)




var randomNumber2 = Math.floor((Math.random() * 7) + 1);


var fileSource2 = "images/dice" + randomNumber2 +".png"

console.log('fileSource2', fileSource2)




function twoFirdaws() {
if (fileSource===fileSource2 && fileSource==="images/dice7.png") {

var kerching = "Kerching!"
    alert(kerching)
}
}

function changeImage() {
  
    document.getElementsByClassName("img1")[0].src = fileSource
    document.getElementsByClassName("img2")[0].src = fileSource2
   return null;
}



function changeh1() {
    if (fileSource > fileSource2) {
        document.querySelector("h1").innerHTML= "player 1 wins";
        // var player1 = "player1wins!"
    }  else if (fileSource < fileSource2) {
        document.querySelector("h1").innerHTML= "player 2 wins";
        // var player1 = "player2wins!"
    
    }  else if (fileSource===fileSource2) {
        document.querySelector("h1").innerHTML= "draw";
    }
}


changeImage();
setTimeout(function(){twoFirdaws(); }, 500);
changeh1();


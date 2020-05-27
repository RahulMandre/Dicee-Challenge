function player1(){
  var RandomNumber1 = Math.floor(Math.random()*6)+1;

  var Randomsrc1 = "images\\" + "dice" + RandomNumber1 + ".png";

  return Randomsrc1

}

function player2(){
  var RandomNumber2 = Math.floor(Math.random()*6)+1;
  var Randomsrc2 = "images\\" + "dice" + RandomNumber2 + ".png";
  return Randomsrc2
}



function firstImage() {

document.querySelector('.imgR').classList.add("imgRload");

setTimeout(function() {
  document.querySelector('.imgR').classList.remove("imgRload");
  var a= player1();
  var b= player2();
document.querySelector('.img1').setAttribute("src",a);
document.querySelector('.img2').setAttribute("src",b);

  if (b > a) {
    document.querySelector('h1').textContent = "Player 2 Wins";
  }
  else if (b < a) {
    document.querySelector('h1').textContent = "Player 1 Wins";
  }
  else {
    document.querySelector('h1').textContent = "Its a tie";
  }

},3000)

}

document.querySelector('.btn1').addEventListener("click",firstImage);

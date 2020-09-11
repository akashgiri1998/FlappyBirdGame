const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

//background
const bg = new Image();
bg.src = './images/bg.png';

//foreground
const fg = new Image();
fg.src = './images/fg.png';

//pipenorth
const pipeNorth = new Image();
pipeNorth.src = './images/pipeNorth.png';

//pipeSouth
const pipeSouth = new Image();
pipeSouth.src = './images/pipeSouth.png';

//bird
const bird = new Image();
bird.src = './images/bird.png';

function draw(){
    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeNorth,100,0);
}
setInterval(draw,100);
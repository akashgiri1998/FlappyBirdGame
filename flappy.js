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

//constant
const gap=115;
const constant= pipeNorth.height+gap;

const bx=10;
const by=150;
const gravity=1.5;

//key press
document.addEventListener("keydown",moveUp);

function moveUp(){
    by-=20;
}

const pipe=[];

pipe[0]={
    x:cvs.width,
    y:0
}

function draw(){
    ctx.drawImage(bg,0,0);

    for(let i=0; i<pipe.length; i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        if(pipe[i].x==125){
            pipe.push({
                x:cvs.width,
                y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            })
        }

        if( bx + bird.width >= pipe[i].x && bx <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || by + bird.height >=  cvs.height - fg.height){
            location.reload(); // reload the page
        }
    }
    //ctx.drawImage(pipeNorth,100,0);
    //ctx.drawImage(pipeSouth,100,0+constant)
    ctx.drawImage(fg,0,cvs.height-fg.height);
    ctx.drawImage(bird,bx,by);
    
    by+=gravity;

    requestAnimationFrame(draw);
}
setInterval(draw,100);
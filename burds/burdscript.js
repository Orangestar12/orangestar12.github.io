var go = false, lose = false, birdSpeed = 0, burd = document.getElementById('burd'), score = 0, hs = parseInt(localStorage['burd.highscore']);
if(isNaN(hs)){hs=0;}
function randomInt(low, high){return Math.floor(Math.random() * (high - low + 1)) + low;}

function resetPipe(){
    for(i=0; i < document.getElementsByClassName('pipe').length; i++)
        {document.getElementsByClassName('pipe')[i].style.left = '480px';}
}
function resetPipeEven(){
    for(i=0; i < document.getElementsByClassName('pipeeven').length; i++)
        {document.getElementsByClassName('pipeeven')[i].style.left = '480px';}
}
function resetPipes(){
    newPipe();
    newEvenPipe();
    for(i=0; i < document.getElementsByClassName('pipeeven').length; i++)
        {document.getElementsByClassName('pipeeven')[i].style.left = '752px';}
}
function movePipes(){
        for(i=0; i < document.getElementsByClassName('pipe').length; i++)
        {
            document.getElementsByClassName('pipe')[i].style.left = parseInt(document.getElementsByClassName('pipe')[i].style.left) - 8 + 'px';
            document.getElementsByClassName('pipeeven')[i].style.left = parseInt(document.getElementsByClassName('pipeeven')[i].style.left) - 8 + 'px';
        }
        if(parseInt(document.getElementsByClassName('pipe')[0].style.left) <= -64){newPipe();}
        if(parseInt(document.getElementsByClassName('pipeeven')[0].style.left) <= -64){newEvenPipe();}
}

function newPipe(){
    document.getElementsByClassName('pipe')[0].style.height = randomInt(40, 420) + "px";
    document.getElementsByClassName('pipe')[1].style.height = 640 - parseInt(document.getElementsByClassName('pipe')[0].style.height) - 180 + "px";
    resetPipe();
}
function newEvenPipe(){
    document.getElementsByClassName('pipeeven')[0].style.height = randomInt(40, 420) + "px";
    document.getElementsByClassName('pipeeven')[1].style.height = 640 - parseInt(document.getElementsByClassName('pipeeven')[0].style.height) - 180 + "px";
    resetPipeEven();
}

function update(){
    if(go == true){
        birdSpeed += 1;
        burd.style.top = (parseInt(burd.style.top) + birdSpeed) + "px";
        if( //lose condition
            (parseInt(burd.style.top) > 580 || parseInt(burd.style.top) < 0) //burd hits boundary
            || ((parseInt(document.getElementsByClassName('pipe')[0].style.left) < 144) && (parseInt(document.getElementsByClassName('pipe')[0].style.left) > 16) && (parseInt(document.getElementsByClassName('pipe')[0].style.height) > parseInt(burd.style.top))) //burd hits odd top pipe
            || ((parseInt(document.getElementsByClassName('pipe')[1].style.left) < 144) && (parseInt(document.getElementsByClassName('pipe')[1].style.left) > 16) && (640 - parseInt(document.getElementsByClassName('pipe')[1].style.height) < parseInt(burd.style.top) + 64)) //burd hits odd bottom pipe
            || ((parseInt(document.getElementsByClassName('pipeeven')[0].style.left) < 144) && (parseInt(document.getElementsByClassName('pipeeven')[0].style.left) > 16) && (parseInt(document.getElementsByClassName('pipeeven')[0].style.height) > parseInt(burd.style.top))) //burd hits even top pipe
            || ((parseInt(document.getElementsByClassName('pipeeven')[1].style.left) < 144) && (parseInt(document.getElementsByClassName('pipeeven')[1].style.left) > 16) && (640 - parseInt(document.getElementsByClassName('pipeeven')[1].style.height) < parseInt(burd.style.top) + 64)) //burd hits even bottom pipe
          )
        {
            go = false;
            lose = true;
            birdSpeed = -(2*15);
            //console.log("Burd was stopped, position " + burd.style.top + "; speed " + birdSpeed + ";");
            localStorage['burd.highscore'] = hs;
        }
        if( //score condition
            (parseInt(document.getElementsByClassName('pipe')[0].style.left) == 16)
            || (parseInt(document.getElementsByClassName('pipeeven')[0].style.left) == 16)
          )
        {
            score++;
            document.getElementById('score').innerHTML = score;
            if(hs < score){
                hs=score;
                document.getElementById('hs').innerHTML = hs;
            }
        }
        movePipes();
    }
    if(lose==true){
        if(parseInt(burd.style.top) < 660){
            birdSpeed += 4;
            burd.style.top = (parseInt(burd.style.top) + birdSpeed) + "px";
        }
        for(i=0; i < document.getElementsByClassName('pipe').length; i++)
        {
            movePipes();
        }
        document.getElementById('YouLostSon').style.opacity = 1;
    }
    else{
        document.getElementById('YouLostSon').style.opacity = 0;
    }
}

function start(){
    burd.style.top = '288px';
    resetPipes();
    go = true;
    lose = false;
    score = 0;
    document.getElementById('score').innerHTML = score;
}
setInterval(update, 33.33); //This is ~about~ 30fps

document.getElementsByTagName('body')[0].onclick = function(e){
    //console.log(e);
    if(go==true){birdSpeed = -(1.5*8);}
    e.preventDefault();
    e.stopPropagation(); //These don't work because the function is designed to bubble, but it's the thought that counts.
}
document.getElementsByTagName('body')[0].onkeydown = function(e){
    if(go==true){birdSpeed = -(1.5*8);}
    else{start();birdSpeed = -(1.5*8);}
    e.preventDefault();
    e.stopPropagation(); //These do work though. Hm.
}

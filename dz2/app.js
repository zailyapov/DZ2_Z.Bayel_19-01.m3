const block = document.querySelector('.block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 440 && positionY == 0) {
        positionX += 16
        block.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 16
        block.style.top = `${positionY}px`
        setTimeout(move, 100)
    } else if (positionY >= 360 && positionX != 0) {
        positionX -= 16
        block.style.left = `${positionX}px`
        setTimeout(move, 100)
    }else if (positionX == 0 && positionY != 440) {
        positionY -= 16
        block.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}
move()



let h1 = document.getElementsByTagName('h1')[0];
let sec = 0;
let min = 0;
let hrs = 0;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}

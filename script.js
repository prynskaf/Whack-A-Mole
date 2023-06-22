
// A function to create a random amount of time that the mole will peep.
//A function to choose the random hole from which the mole will peep.
// A function to make the mole pop from the random hole using the two above functions.
// A function to start the game.

// A function to “prevent” cheating , once the mole is whacked it 
// should hide again and to set the score

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp =  false;
let score = 0;


// A function to create a random amount of time that the mole will peep.
function randomTime(min , max) {
    return Math.round(Math.random() * (max-min) + min)
}

// A function to choose the random hole from which the mole will peep.
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx];

    if(hole === lastHole) {
        console.log("Ah nah thats the same one bud");
        return randomHole(holes)
    }
    lastHole = hole;
    return hole;
}


// A function to make the mole pop from the random hole using the two above functions.
function peep() {
    const  time = randomTime(200, 1000);
    const hole = randomHole(holes)
    
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time)
}
peep();


// A function to start the game.
function startGame() {
    scoreBoard.textContent = 0
    timeUp = false;
    score = 0;

    peep();

    setTimeout(() => timeUp = true , 10000)
}


// function to prevent cheating 
function whach(e) {
    if(!e.isTrusted) return;
    score++;
    
 
    if(score == 5) {
        console.log('New hight score');
    }
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score
}
moles.forEach(mole => mole.addEventListener('click' , whach));
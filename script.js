
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

    console.log(holes.length);
}

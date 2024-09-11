const homeScoreboard = document.getElementById("home-score");
const guestScoreboard = document.getElementById("guest-score");
const homePlusOne = document.getElementById("home-plus-one");
const homePlusTwo = document.getElementById("home-plus-two");
const homePlusThree = document.getElementById("home-plus-three");
const guestPlusOne = document.getElementById("guest-plus-one");
const guestPlusTwo = document.getElementById("guest-plus-two");
const guestPlusThree = document.getElementById("guest-plus-three");
const resetButton = document.getElementById("reset")

let homeScore = 0;
let guestScore = 0;
guestScoreboard.innerText = 0;
homeScoreboard.innerText = 0;

const plusOne = (team) => {
    if (team === homePlusOne) {
        homeScore += 1;
        homeScoreboard.innerText = homeScore;
    }
    else if (team === guestPlusOne) {
        guestScore += 1;
        guestScoreboard.innerText = guestScore;
    }
}

const plusTwo = (team) => {
    if (team === homePlusTwo) {
        homeScore += 2;
        homeScoreboard.innerText = homeScore;
    }
    else if (team === guestPlusTwo) {
        guestScore += 2;
        guestScoreboard.innerText = guestScore;
    }
}

const plusThree = (team) => {
    if (team === homePlusThree) {
        homeScore += 3;
        homeScoreboard.innerText = homeScore;
    }
    else if (team === guestPlusThree) {
        guestScore += 3;
        guestScoreboard.innerText = guestScore;
    }
}

const reset = () => {
    homeScore = 0;
    guestScore = 0;
    homeScoreboard.innerText = homeScore;
    guestScoreboard.innerText = guestScore;
}

guestPlusOne.addEventListener("click", () => {plusOne(guestPlusOne);});
guestPlusTwo.addEventListener("click", () => {plusTwo(guestPlusTwo);});
guestPlusThree.addEventListener("click", () => {plusThree(guestPlusThree);});
homePlusOne.addEventListener("click", () => {plusOne(homePlusOne);});
homePlusTwo.addEventListener("click", () => {plusTwo(homePlusTwo);});
homePlusThree.addEventListener("click", () => {plusThree(homePlusThree);});
resetButton.addEventListener("click", reset);


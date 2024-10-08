const defColor = document.getElementById("default-color");
const hawks = document.getElementById("hawks");
const celtics = document.getElementById("celtics");
const nets = document.getElementById("nets");
const hornets = document.getElementById("hornets");
const bulls = document.getElementById("bulls");
const cavaliers = document.getElementById("cavaliers");
const mavericks = document.getElementById("mavericks");
const nuggets = document.getElementById("nuggets");
const pistons = document.getElementById("pistons");
const warriors = document.getElementById("warriors");
const rockets = document.getElementById("rockets");
const pacers = document.getElementById("pacers");
const clippers = document.getElementById("clippers");
const lakers = document.getElementById("lakers");
const grizzlies = document.getElementById("grizzlies");
const heat = document.getElementById("heat");
const bucks = document.getElementById("bucks");
const timberwolves = document.getElementById("timberwolves");
const pelicans = document.getElementById("pelicans");
const knicks = document.getElementById("knicks");
const thunder = document.getElementById("thunder");
const magic = document.getElementById("magic");
const sixers = document.getElementById("sixers");
const suns = document.getElementById("suns");
const blazers = document.getElementById("blazers");
const kings = document.getElementById("kings");
const spurs = document.getElementById("spurs");
const raptors = document.getElementById("raptors");
const jazz = document.getElementById("jazz");
const wizards = document.getElementById("wizards");

const homeScoreboard = document.getElementById("home-score");
const guestScoreboard = document.getElementById("guest-score");
const homePlusOne = document.getElementById("home-plus-one");
const homePlusTwo = document.getElementById("home-plus-two");
const homePlusThree = document.getElementById("home-plus-three");
const guestPlusOne = document.getElementById("guest-plus-one");
const guestPlusTwo = document.getElementById("guest-plus-two");
const guestPlusThree = document.getElementById("guest-plus-three");

const countdown = document.getElementById("timer");
const mainCountdown = document.getElementById("main-countdown-btn");
const resetCountdownBtn = document.getElementById("reset-countdown-btn");
const minutesInpt = document.getElementById("select-minutes");
const minutesBtn = document.getElementById("select-minutes-btn");

const resetHomeScore = document.getElementById("clear-home-score");
const resetGuestScore = document.getElementById("clear-guest-score");
const resetButton = document.getElementById("reset");

let homeScore = 0;
let guestScore = 0;
guestScoreboard.innerText = 0;
homeScoreboard.innerText = 0;

// SCORING FUNCTIONALITY

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

// SCORING BUTTONS

guestPlusOne.addEventListener("click", () => {plusOne(guestPlusOne);});
guestPlusTwo.addEventListener("click", () => {plusTwo(guestPlusTwo);});
guestPlusThree.addEventListener("click", () => {plusThree(guestPlusThree);});
homePlusOne.addEventListener("click", () => {plusOne(homePlusOne);});
homePlusTwo.addEventListener("click", () => {plusTwo(homePlusTwo);});
homePlusThree.addEventListener("click", () => {plusThree(homePlusThree);});
resetHomeScore.addEventListener("click", () => {
    homeScore = 0;
    homeScoreboard.innerText = homeScore;
})
resetGuestScore.addEventListener("click", () => {
    guestScore = 0;
    guestScoreboard.innerText = guestScore;
})

// TEAM COLOUR OBJECT

const teamObj = [
    {name: "default color", primary: "black", secondary: "white", third: "gray"}, 
    {name: "Hawks", primary: "#E03A3E", secondary: "#26282A", third: "#C1D32F"}, 
    {name: "Celtics", primary: "#007A33", secondary: "#BA9653", third: "#FFFFFF"}, 
    {name: "Nets", primary: "gray", secondary: "white", third: "black"}, 
    {name: "Hornets", primary: "#00788C", secondary: "#1D1160", third: "#A1A1A4"}, 
    {name: "Bulls", primary: "#CE1141", secondary: "black", third: "gray"}, 
    {name: "Cavaliers", primary: "#860038", secondary: "#FDBB30", third: "#041E42"}, 
    {name: "Mavericks", primary: "#B8C4CA", secondary: "#002B5E", third: "#00538C"}, 
    {name: "Nuggets", primary: "#0E2240", secondary: "#FEC524", third: "#8B2131"}, 
    {name: "Pistons", primary: "#C8102E", secondary: "#1D42BA", third: "#002D62"}, 
    {name: "Warriors", primary: "#FFC72C", secondary: "#1D428A", third: "gold"}, 
    {name: "Rockets", primary: "#CE1141", secondary: "#C4CED4", third: "black"}, 
    {name: "Pacers", primary: "#FDBB30", secondary: "#002D62", third: "#BEC0C2"}, 
    {name: "Clippers", primary: "#C8102E", secondary: "#1D428A", third: "#BEC0C2"}, 
    {name: "Lakers", primary: "#552583", secondary: "#FDB927", third: "yellow"}, 
    {name: "Grizzlies", primary: "#12173F", secondary: "#5D76A9", third: "#707271"}, 
    {name: "Heat", primary: "#000000", secondary: "#98002E", third: "#F9A01B"}, 
    {name: "Bucks", primary: "#00471B", secondary: "#EEE1C6", third: "#0077C0"}, 
    {name: "Timberwolves", primary: "#0C2340", secondary: "#9EA2A2", third: "#236192"}, 
    {name: "Pelicans", primary: "#0C2340", secondary: "#C8102E", third: "#85714D"}, 
    {name: "Knicks", primary: "#F58426", secondary: "#006BB6", third: "#BEC0C2"}, 
    {name: "Thunder", primary: "#007AC1", secondary: "#FDBB30", third: "#EF3B24"}, 
    {name: "Magic", primary: "#0077C0", secondary: "#C4CED4", third: "#000000"}, 
    {name: "Sixers", primary: "#006BB6", secondary: "#C4CED4", third: "#ED174C"}, 
    {name: "Suns", primary: "#1D1160", secondary: "#E56020", third: "#DE7F53"}, 
    {name: "Blazers", primary: "#E03A3E", secondary: "black", third: "gray"}, 
    {name: "Kings", primary: "#5A2D81", secondary: "#000000", third: "#63727A"}, 
    {name: "Spurs", primary: "black", secondary: "#C4CED4", third: "white"}, 
    {name: "Raptors", primary: "#CE1141", secondary: "#000000", third: "#B4975A"},  
    {name: "Jazz", primary: "#F9A01B", secondary: "#002B5C", third: "#00471B"}, 
    {name: "Wizards", primary: "#002B5C", secondary: "#E31837", third: "#C4CED4"}
];

// UPDATES COLOUR ON CLICK FUNCTIONALITY

function updateColorScheme(teamName) {
    const team = teamObj.find(t => t.name === teamName);

    if (team) {
        document.body.style.backgroundColor = team.primary;
        document.querySelector('.main-cont').style.backgroundColor = team.primary;
        document.querySelectorAll('.team').forEach(el => el.style.backgroundColor = team.primary);
        document.getElementById('reset').style.backgroundColor = team.primary;
        document.querySelectorAll('.buttons button').forEach(button => button.style.borderColor = team.primary);
        document.querySelectorAll('.buttons button').forEach(button => button.style.color = team.primary);
        document.querySelector('.main-cont').style.borderColor = team.secondary;
        document.querySelectorAll('.team').forEach(el => el.style.color = team.secondary);
        document.querySelectorAll('.buttons button').forEach(button => {
            button.style.backgroundColor = team.secondary; 
            button.style.borderColor = team.secondary;
        });
        document.getElementById('reset').style.color = team.secondary;
        document.querySelectorAll(".team-btn").forEach(el => el.style.backgroundColor = team.secondary);
        document.querySelectorAll(".team-btn").forEach(el => el.style.borderColor = team.secondary);

        mainCountdown.style.color = team.secondary;
        resetCountdownBtn.style.color = team.secondary;
        minutesBtn.style.color = team.secondary;
        resetHomeScore.style.color = team.secondary;
        resetGuestScore.style.color = team.secondary;


        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
            .buttons button:active {
                background-color: ${team.third} !important;
                border-color: ${team.third} !important;
            }
                
            #reset:active,
            #main-countdown-btn:active,
            #reset-countdown-btn:active,
            #clear-guest-score:active,
            #clear-home-score:active,
            #select-minutes-btn:active {
                color: ${team.third} !important;
            }

            .team-btn:active {
                background-color: ${team.third} !important;
                border-color: ${team.third} !important;
            }

            .team-btn {
                color: white !important;
            }
        `;
        document.head.appendChild(styleElement);
    } else {
        console.error('Team not found');
    }
}

// UPDATE COLOUR BUTTONS

document.querySelectorAll('header button').forEach(button => {
    button.addEventListener('click', () => {
        const teamName = button.getAttribute('data-team');
        updateColorScheme(teamName);
    });
});

// TIMER FUNCTIONALITY

let countdownInterval;
let startingMinutes = 12;
let time = startingMinutes * 60;
countdown.innerText = "12:00";
mainCountdown.innerText = "Start";

const setTimer = (minutesInput) => {
    clearInterval(countdownInterval);
    startingMinutes = minutesInput;
    time = startingMinutes * 60;
    startingMinutes = startingMinutes < 10 ? "0" + startingMinutes : startingMinutes;
    countdown.innerText = `${startingMinutes}:00`;
    mainCountdown.innerText = "Start";
}

const updateCountdown = () => {
    if (time >= 0) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;
    } else {
        resetCountdown();
    }
}

const resetCountdown = () => {
    const inputValue = minutesInpt.value;
    if (!inputValue) {
        clearInterval(countdownInterval);
        mainCountdown.innerText = "Start";
        startingMinutes = 12;
        time = startingMinutes * 60;
        startingMinutes = startingMinutes < 10 ? "0" + startingMinutes : startingMinutes;
        countdown.innerText = `${startingMinutes}:00`;
    } else if (inputValue) {
        clearInterval(countdownInterval);
        const inputValue = minutesInpt.value;
        mainCountdown.innerText = "Start";
        startingMinutes = inputValue;
        time = startingMinutes * 60;
        startingMinutes = startingMinutes < 10 ? "0" + startingMinutes : startingMinutes;
        countdown.innerText = `${startingMinutes}:00`;
    }
}

// TIMER BUTTONS

mainCountdown.addEventListener("click", () => {
    if (mainCountdown.innerText === "Start") {
        countdownInterval = setInterval(updateCountdown, 1000);
        mainCountdown.innerText = "Pause";
    } else if (mainCountdown.innerText === "Pause") {
        clearInterval(countdownInterval);
        mainCountdown.innerText = "Start";
    }
});
resetCountdownBtn.addEventListener("click", resetCountdown);
minutesBtn.addEventListener("click", () => {
    const inputValue = minutesInpt.value;
    setTimer(inputValue);
})

// RESET ALL BUTTON

const reset = () => {
    homeScore = 0;
    guestScore = 0;
    homeScoreboard.innerText = homeScore;
    guestScoreboard.innerText = guestScore;
    clearInterval(countdownInterval);
    const inputValue = minutesInpt.value;
    if (!inputValue) {
        startingMinutes = 12;
        mainCountdown.innerText = "Start";
        time = startingMinutes * 60;
        startingMinutes = startingMinutes < 10 ? "0" + startingMinutes : startingMinutes;
        countdown.innerText = `${startingMinutes}:00`;
    } else {
        startingMinutes = inputValue;
        mainCountdown.innerText = "Start";
        time = startingMinutes * 60;
        startingMinutes = startingMinutes < 10 ? "0" + startingMinutes : startingMinutes;
        countdown.innerText = `${startingMinutes}:00`;
    }
}

resetButton.addEventListener("click", reset);

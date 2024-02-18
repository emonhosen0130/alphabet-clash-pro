function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden')
    console.log(homeSction)

    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden')
}

function handleKeyboardButtonPress(event) {
    const PlayPressed = event.key;
    console.log('player pressed ', PlayPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(PlayPressed, expectedAlphabet);

    if (PlayPressed === expectedAlphabet) {
        console.log('You get a point');
        // console.log('you have pressed correctly', expectedAlphabet);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You lost a life');
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
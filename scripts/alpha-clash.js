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
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You lost a life');
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
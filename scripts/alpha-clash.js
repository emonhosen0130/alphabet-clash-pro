function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden')
    // console.log(homeSction)

    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden')
}

function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    setBackgroundColorById(alphabet);
}
// Put your event handlers in here, and they can call/ invoke your translator functions
// No dom stuff in the translator.js!!

import {translateEnglishtoMorse, translateMorseToEnglish} from './translator.js';

document.getElementById('translateMorse').addEventListener('click', () => {
    const morseInput = document.getElementById('morseInput').value;
    const morseToEnglish = translateMorseToEnglish(morseInput); 
    document.getElementById('output').innerHTML = morseToEnglish;
});

document.getElementById('translateEnglish').addEventListener('click', () => {
    const englishInput = document.getElementById('englishInput').value;
    const englishToMorse = translateEnglishtoMorse(englishInput);
    document.getElementById('output').innerHTML = englishToMorse;
});




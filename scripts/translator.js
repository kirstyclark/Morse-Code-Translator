const englishAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
  " ",
  "",
  ""
];

const morseAlphabet = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
  "-----",
  "+",
  " ",
  "",
  "/"
];

export const translate = (input) => {
  let inputLanguage;
  if (input.includes(".") || input.includes("-")) {
    inputLanguage = "morse";
  } else {
    inputLanguage = "english";
  }
  if (inputLanguage == "morse") {
    if (input.includes("/")) {
      const morseArr = input.split("/");
      const morseToEnglishArr = morseArr.map(char => findCharacter(char, morseAlphabet, englishAlphabet));
      return morseToEnglishArr.join("");
    } else {
      return findCharacter(input, morseAlphabet, englishAlphabet);
    }
  } else if (inputLanguage == "english") {
    const englishArr = input.toLowerCase().split("");
    const englishToMorseArr = englishArr.map(char => findCharacter(char, englishAlphabet, morseAlphabet));
    return englishToMorseArr.join(" // ");
  } else {
    return "invalid input";
  }
};

const findCharacter = (input, srcAlphabet, destAlphabet) => {
  const position = srcAlphabet.indexOf(input);
  if (position != -1) {
    return destAlphabet[position];
  } else {
    return 'invalid'
  };
}

export const playOutput = (output) => {
  let outputLanguage;
  if (output.includes(".") || output.includes("-")) {
    outputLanguage = "morse";
  } else {
    outputLanguage = "english";
  }
  if (outputLanguage == 'morse') {
    const dit = '../assets/sounds/dit.mp3';
    const dah = '../assets/sounds/dah.mp3';
    const space = '../assets/sounds/space.mp3';
    let sounds = {'.': dit, '-': dah, ' ': space};
    let lettersArr = output.split(' // ');
    let charsArr = (lettersArr.join(' ')).split('');
    let playlist = charsArr.map(char => sounds[char]);
  
    let audio = new Audio(), i = 0;
    audio.addEventListener('ended', () => {
      i = ++i < playlist.length ? i : undefined;
      audio.src = playlist[i] || space;
      audio.play()
    })
    audio.loop = false;
    audio.src = playlist[0];
    audio.play();
  } else if (outputLanguage == 'english'){
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.text = output;
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  } else {
    return 'invalid'
  };
}
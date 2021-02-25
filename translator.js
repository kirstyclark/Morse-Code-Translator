// 1. Input #1 Morse -- gives an english output
// 2. Or it will be english letters which makes morse the output
// 3. Validate the input (is it valid morse? is it valid english?)
// 4. Validate the input (empty inputs, what else)
// 5. We need to translate this inut to the output language
//      option #1 - store two arrays of 26 values, find the index of one and then find the other
//      option #2 - have an object of keyvalues, letters are keys, values are morse
//      option #3 - ascii lookup
//      option #4 - two switch cases of 26 cases
// 6. Display this translate on the page

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
  "",
  " "
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
  "//",
  "+"
];

export const translateEnglishtoMorse = (englishInput) => {
  if (englishInput.length >= 1) {
    const englishArr = englishInput.toLowerCase().split("");
    const englishToMorseArr = englishArr.map((character) => {
      const englishPosition = englishAlphabet.indexOf(character);
      if (englishPosition != -1) {
        return morseAlphabet[englishPosition];
      } else {
        return "invalid";
      }
    });
    return englishToMorseArr.join(' // ');
  } else {
    return "invalid";
  }
};

     
export const translateMorseToEnglish = (morseInput) => {
    if (morseInput.length >= 1) {
        if (morseInput.includes('//')) {
            const morseArr = morseInput.split('//');
            const morseToEnglishArr = morseArr.map((character) => {
                const morsePosition = morseAlphabet.indexOf(character);
                if (morsePosition != -1) {
                  return englishAlphabet[morsePosition];
                } else {
                  return 'invalid';
                }
            })
            return morseToEnglishArr.join('');
        } else {
            const morsePosition = morseAlphabet.indexOf(morseInput);
            if (morsePosition != -1) {
                return englishAlphabet[morsePosition];
            } else {
                return 'invalid';
            }
        }
    } else {
        return 'invalid';
    }
};


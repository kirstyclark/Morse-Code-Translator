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
      const morseToEnglishArr = morseArr.map((character) => {
        const morsePosition = morseAlphabet.indexOf(character);
        if (morsePosition != -1) {
          return englishAlphabet[morsePosition];
        } else {
          return "invalid";
        }
      });
      return morseToEnglishArr.join("");
    } else {
      const morsePosition = morseAlphabet.indexOf(input);
      if (morsePosition != -1) {
        return englishAlphabet[morsePosition];
      } else {
        return "invalid";
      }
    }
  } else if (inputLanguage == "english") {
    const englishArr = input.toLowerCase().split("");
    const englishToMorseArr = englishArr.map((character) => {
      const englishPosition = englishAlphabet.indexOf(character);
      if (englishPosition != -1) {
        return morseAlphabet[englishPosition];
      } else {
        return "invalid";
      }
    });
    return englishToMorseArr.join(" // ");
  } else {
    return "invalid input";
  }
};

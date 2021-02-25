"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = void 0;
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
var englishAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", " ", "", ""];
var morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "+", " ", "", "/"];

var translate = function translate(input) {
  var inputLanguage;

  if (input.includes(".") || input.includes("-")) {
    inputLanguage = "morse";
  } else {
    inputLanguage = "english";
  }

  if (inputLanguage == "morse") {
    if (input.includes("/")) {
      var morseArr = input.split("/");
      var morseToEnglishArr = morseArr.map(function (character) {
        var morsePosition = morseAlphabet.indexOf(character);

        if (morsePosition != -1) {
          return englishAlphabet[morsePosition];
        } else {
          return "invalid";
        }
      });
      return morseToEnglishArr.join("");
    } else {
      var morsePosition = morseAlphabet.indexOf(input);

      if (morsePosition != -1) {
        return englishAlphabet[morsePosition];
      } else {
        return "invalid";
      }
    }
  } else if (inputLanguage == "english") {
    var englishArr = input.toLowerCase().split("");
    var englishToMorseArr = englishArr.map(function (character) {
      var englishPosition = englishAlphabet.indexOf(character);

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

exports.translate = translate;
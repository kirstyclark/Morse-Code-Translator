"use strict";

var _translator = require("./translator.js");

document.getElementById('input').addEventListener('keyup', function () {
  var input = document.getElementById('input').value;
  var translation = (0, _translator.translate)(input);
  document.getElementById('output').innerHTML = translation;
});
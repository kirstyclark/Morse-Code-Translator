import {translate} from './translator.js';


document.getElementById('input').addEventListener('keyup', () => {
    const input = document.getElementById('input').value;
    const translation = translate(input);
    document.getElementById('output').innerHTML = translation;
});

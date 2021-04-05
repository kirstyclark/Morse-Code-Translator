import {translate} from './translator.js';
import {playOutput} from './translator.js';


document.getElementById('input').addEventListener('keyup', () => {
    console.log('hello')
    const input = document.getElementById('input').value;
    const translation = translate(input);
    document.getElementById('output').innerHTML = translation;
});

document.getElementById('play').addEventListener('click', () => {
    console.log('play the audio bish!!');
    const output = document.getElementById('output').innerText;
    playOutput(output);
})


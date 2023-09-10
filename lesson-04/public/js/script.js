"use strict";
let textPrompt = window.prompt('Enter your name: ');
document.getElementById('result').textContent = textPrompt;
document.getElementById('btn-submit').onclick = function () {
    let firstName = document.getElementById('firstname');
    document.querySelector('#result').textContent = firstName.value;
};

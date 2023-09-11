"use strict";
let grade = 88;
let getDisplay;
if (grade >= 100) {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are god.';
}
else if (grade <= 100 && grade >= 90) {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are prodigy.';
}
else if (grade <= 90 && grade >= 80) {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are genius.';
}
else if (grade <= 80 && grade >= 70) {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are smart.';
}
else if (grade <= 70 && grade >= 60) {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are normal.';
}
else {
    getDisplay = document.querySelector('#display-result');
    getDisplay.textContent = 'You are weird.';
}

"use strict";
let sideA, sideB, sideC = 0;
document.getElementById('id-calculate').onclick = function () {
    sideA = document.getElementById('id-side-a');
    sideB = document.getElementById('id-side-b');
    sideC = Math.sqrt(Math.pow(Number(sideA.value), 2) + Math.pow(Number(sideA.value), 2));
    document.querySelector('#side-a').textContent = String(sideA.value);
    document.querySelector('#side-b').textContent = String(sideB.value);
    document.querySelector('#side-c').textContent = String(sideC);
};

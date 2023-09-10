"use strict";
const PI = 3.1415;
let radius = '';
let circumference = 0;
radius = window.prompt('Enter the radius of the circle:');
radius = Number(radius);
circumference = 2 * PI * radius;
document.querySelector('#result-value').textContent = String(circumference);

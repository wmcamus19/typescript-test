"use strict";
// let age = window.prompt('Enter your age:');
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// document.getElementById('id-age').textContent = age;
// console.log(document.querySelector('#id-age').textContent);
let convertToNumber = '3.14232131';
convertToNumber = Number(convertToNumber);
console.log(convertToNumber, typeof convertToNumber);
let convertToString = 123.32432;
convertToString = String(convertToString);
console.log(convertToString, typeof convertToString);
let convertToBoolean = 'false';
convertToBoolean = Boolean(convertToBoolean);
console.log(convertToBoolean, typeof convertToBoolean);
let convertToBooleanString = true;
convertToBooleanString = String(convertToBooleanString);
console.log(convertToBooleanString, typeof convertToBooleanString);
let convertToBooleanNumber = false;
convertToBooleanNumber = Number(convertToBooleanNumber);
console.log(convertToBooleanNumber, typeof convertToBooleanNumber);
let convertToStringNumber = 'zebra';
// NAN = Not A Number.
convertToStringNumber = Number(convertToStringNumber);
console.log(convertToStringNumber, typeof convertToStringNumber);
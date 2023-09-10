// string.
let firstName: string = 'Jotaro Kujo';
// number
let age: number = 29;
// boolean
let isStudent: boolean = true;

console.log('Your name is:', firstName);
console.log('Your age is:', age);
console.log('Are you a student?:', isStudent);

// Manipulating DOM.

document.querySelector('.first-name')!.textContent =
	'Your name is: ' + firstName;

document.querySelector('.age')!.textContent = 'Your age is: ' + age;
document.querySelector('.is-student')!.textContent =
	'Are you a student?: ' + isStudent;

let fullName: string = 'Jotaro Kujo';
let firstName: string = fullName.slice(0, fullName.indexOf(' '));
let lastName: string = fullName.slice(fullName.indexOf(' ') + 1);

console.log(firstName);
console.log(lastName);

let bookTitle: string = 'Jojo Bizarree Adventures: Stardust Crusaders.';

console.log(bookTitle);
console.log('Length:', bookTitle.length);
console.log('toUpperCase():', bookTitle.toUpperCase());
console.log('toLowerCase():', bookTitle.toLowerCase());
console.log('charAt():', bookTitle.charAt(5));
console.log('indexOf():', bookTitle.indexOf('B'));
console.log('lastIndexOf():', bookTitle.lastIndexOf('.'));
console.log('replace():', bookTitle.replaceAll('e', 'p'));

bookTitle = '      Jojo Bizarree Adventures: Stardust Crusaders.             ';
console.log('Non-trim:', bookTitle);
console.log('trim():', bookTitle.trim());
console.log('trimStart():', bookTitle.trimStart());
console.log('trimeEnd():', bookTitle.trimEnd());

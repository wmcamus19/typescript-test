const PI: number = 3.1415;
let radius: any = '';
let circumference: number = 0;

radius = window.prompt('Enter the radius of the circle:');
radius = Number(radius);

circumference = 2 * PI * radius;

document.querySelector('#result-value')!.textContent = String(circumference);

const a = ['1', '2', '3', '4', '5', '6', '7'];

const evenNumbers = a.filter(val => Number(val) % 2 === 0);

console.log('Filtered even numbers:', evenNumbers);
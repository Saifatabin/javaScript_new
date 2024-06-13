const a = ['1', '2', '3', '4', '5', '6', '7'];

/*it takes whole array checkes every value with the condition to return a new array */ 

const evenNumbers = a.filter((val) => Number(val) % 2 === 0);

console.log('Filtered even numbers:', evenNumbers);
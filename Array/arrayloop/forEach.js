const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

/*performs a function on each value 
doesn't create a new array thats why "dublednumbers"
is provided*/

numbers.forEach(function(number) {
    doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);

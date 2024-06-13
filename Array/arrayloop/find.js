const a = ['1', '2', '3', '4', '5', '6', '7'];

/*like filter it checkes with the value but the moment it satisfy with the condition it will come out and returns the value it dosn't effect the original array
*/
const b=a.find(val=>val%2===0)
console.log(b)
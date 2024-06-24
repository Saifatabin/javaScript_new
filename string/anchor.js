const str1="click for google"
const link1=str1.anchor("https://google.com")/*out dated method */
console.log(link1);
const link=`<a href="https://google.com">${str1}</a>`/*new way of*/
console.log(link);
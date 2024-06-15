const array = ['1', '2', '3', '4', '5', '6', '7'];

/*this method returns only boolean value checks a perticular value in perticular index 
then returns true and false*/

const index=(alement=>{
    if(array.includes('2',1)){
        return true;
    }
    else{
        return false;
    }
})
console.log(index());
/**function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

for(let i = 1; i < 21 ; i++){
    let result = isEven(i);
    if(result == true){
        console.log(i, "even");
    }
    else{
        console.log(i, "odd");
    }
}
**/

function sum(x,y){
    let c = x + y;
    return c;
}

let x = 10;
let y = 20;
let result = sum(x,y);
console.log("sum of" , x ,"and",y , "is " ,result);
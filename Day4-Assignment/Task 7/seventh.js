var num = prompt("Enter number: ");

console.log("Prime numbers from 2 to "+num+ " are :");

for(var i=2; i<=num ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
        console.log(i);
        }
    }
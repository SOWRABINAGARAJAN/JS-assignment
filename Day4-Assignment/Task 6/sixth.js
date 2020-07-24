while(!false) {
    let num = prompt("Enter number greater than 100");
    if(num<100 || num == null || num ==""){
        continue;
    }
    else{
        console.log('Number: '+num);
        break;
    }
}
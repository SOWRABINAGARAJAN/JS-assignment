let choice = Number(prompt
("Choose operation to perform" +"\n" + "1. Addition"+"\n"+"2.Subtraction"
+"\n"+"3.Multiplication"+"\n" + "4.Division"+"\n" + "5.Square Root"+"\n"+"6.Percentage"));

if(choice<1 || choice>6 || choice==NaN){
  console.log("Please enter valid choice to perform operation!!");
}

else{
  
  switch(choice){
     
    case 1:

      let num1 = Number(prompt("Enter first number"));
      let num2 = Number(prompt("Enter second number"));

      if(num1 == NaN || num2 ==NaN)
      console.log("Please input numeric value to perform operation");
      
      else
      console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`);
      break;
      

      case 2:

        let num3 = Number(prompt("Enter first number"));
        let num4 = Number(prompt("Enter second number"));

        if(num3 == NaN || num4 ==NaN)
        console.log("Please input numeric value to perform operation");
        
        else{
        console.log(`Subtraction of ${num3} and ${num4} is ${num3-num4}`);
        break;
        }

        case 3:

          let num5 = Number(prompt("Enter first number"));
          let num6 = Number(prompt("Enter second number"));

          if(num5 == NaN || num6 ==NaN)
          console.log("Please input numeric value to perform operation");
          
          else{
          console.log(`Multiplication of ${num5} and ${num6} is ${num5*num6}`);
          break;
          }

          case 4:

            let num7 = Number(prompt("Enter first number"));
            let num8 = Number(prompt("Enter second number"));

            if(num7 == NaN || num8 ==NaN)
            console.log("Please input numeric value to perform operation");
            
            else{
            console.log(`Division of ${num7} and ${num8} is ${num7/num8}`);
            break;
            }

          case 5:

            let num9 = Number(prompt("Enter number to perform square root"));
           
              if(num9 == NaN)
              console.log("Please input numeric value to perform operation");
              
              else{
              console.log(`Square root of ${num9} is ${Math.sqrt(num9)}`);
              break;
              }

          case 6:
             
            let num10 = Number(prompt("Enter total number"));
            let num11 = Number(prompt("Enter number to find percentage with the total number"));
                
            if(num10 == NaN || num11 ==NaN)
                console.log("Please input numeric value to perform operation");
                
                else
                console.log(`${num11} out of ${num10} is ${(num11/num10)*100}%`);
                break;
                
          }
        }
// 1
// function calculatesum(a,b){
//     let sum=a+b;
//     return sum;
// }
// console.log(calculatesum(13,17));



//2
//const concatstrings=function(a,b){
 //   return a+b;
//}
//console.log(concatstrings("Hey","Java"));



//3
//function isnumber(a){
 //   if(a%2==0){
//         console.log(`${a} is even`); 
 //       }
 //   else{
 //       console.log(`${a} is Odd`);
  //  }
//}
//isnumber(12)
//isnumber(3)


//4
//function checkprime(num){
 //   let a, result=true;
 //   for(a=2;1<=num-1;a++){
//        if(num%a==0){
//            result=false;
 //           break;
 //       }
 //   }
 //   if(result==true)
 //       console.log(num+"is prime");
 //   else
 //       console.log(num+"is not prime");
    
//}
//checkprime(4);
//checkprime(5)



//5
//const getdayname=function(day){
 //   if(day==1){
 //       return "Monday";
 //   }
 //   else if(day==2){
 //       return "tuesday";
 //   }
 //   else if(day==3){
 //       return "wednesday";
 //   }
 //   else if(day==4){
 //       return "thursday";
  //  }else if(day==5){
 //       return "friday";
 //   }else if(day==6){
 //       return "saturday";
 //   }else if(day==7){
 //       return "sunday";
 //   }
 //   else{
//return "Invalid day"
 //   }
//}
//console.log(getdayname(6));
//console.log(getdayname(3));



//6
//const max=(a,b)=>{
 //   let greaternumber=a>b?"a is greater than b":"b is greater than a";
 //   return greaternumber
//}
//console.log(max(15,6));
//console.log(max(6,15));

//7
//const converttemperature=(value,unit)=>{
//    if (unit==="C"){
 //       return (value*59)+32;
 //   }
 //   else if(unit==="F"){
  //      return (value-32)*95;
 //   }
 //   else{
 //       return "invalid unit";
 //   }
//}
//console.log(converttemperature(15,"C"));
//console.log(converttemperature(60,"F"));


//8
//function calculatearea(shape,dimension){
//    switch(shape){
 //       case"circle":
 //       return 2.9*dimension*2;
//
//        case"square":
 //       return dimension*dimension;
 //       default: return "invalid shape";
//}
//}
//console.log(calculatearea("circle",9));
//console.log(calculatearea("square",7));


//9
//const formatcurrency=function(amount,currency){
//  switch(currency){
//    case "rupees":
 //   return "Rupees"+amount;
 //   case "USA":
//    return "$"+ amount;
//default: 
 //   return "Invalid currency"
 // }
//}
//console.log(formatcurrency(20,"rupees"));
//console.log(formatcurrency(10,"USA"));



//10
//function calculateBMI(weight,height){
 // return height+weight;
//}
//console.log(calculateBMI(12,22));
//console.log(calculateBMI(20,16));



//11
//const calculateCompoundInterest=function(principal,rate,time){
//  let result=principal*(1+rate)*time;
//  return "compound Interest is"+result;
//};
//console.log(calculateCompoundInterest(160000,1,5));


//12
//const calculateTriangleArea=(base,height)=>{
//  let area=21*base*height;
//  return area;
//}
//console.log(calculateTriangleArea(30,40));



//13
//function simpleCalculator(num1,num2,operator){
//  switch (operator){
//    case "+":
 //     return num1+num2;

//    case "-":
 //     return num1-num2;

 //   case "*":
 //     return num1*num2;

 //   case "/":
 //     return num1/num2;

 //   default:
//      return"invalid input";
 // }
//}
//console.log(simpleCalculator(10,16,"+"));
//console.log(simpleCalculator(16,10,"-"));
//console.log(simpleCalculator(10,5,"*"));
//console.log(simpleCalculator(10,5,"/"));
//console.log(simpleCalculator(2,6,"%"));


//14
//const findlargest=function(num1,num2,num3){
 // if(num1>num2 && num1>num3){
 //   return num1+"is greater than"+num2+"and"+num3;
//  }
//  else if(num2>num1 && num2>num3){
//  return num2+"is greater than"+num1+"and"+num3;
 // }
 // else{
//    return num3+"is greater than"+num1+"and"+num2;
//  }

//}
//console.log(findlargest(20,60,45));



//15
//function largest(num1,num2,num3,num4){
 // if(num1>num2&&num3&&num1>num4){
 //   return num1+"is larger than"+num2+""+num3+"and"+num4;
//  }
//  else if(num1>num2&&num3&&num1>num4){
 //   return num2+"is larger than"+num1+""+num3+"and"+num4;
 // }
 // else if(num1>num2&&num3&&num1>num4){
//    return num3+"is larger than"+num2+""+num1+"and"+num4;
 // }
 // else{
//    return num4+"is larger than"+num2+""+num3+"and"+num1;
 // }
//}

//console.log(largest(20,13,18,65));














//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";
function greetings(){
let greeting;
const date= new Date();
const hoursofday=date.getHours();
  if(hoursofday<12){
      greeting="morning";
  }
  else if (hoursofday>=12 && hoursofday<=17){
      greeting="Evening";
  }
  else{
      greeting="Night"
  }
return (<p>Good {greeting} </p>)
}
export default greetings;

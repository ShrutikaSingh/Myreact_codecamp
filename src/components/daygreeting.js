//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";
const styles={
  backgroundColor:"red", color:"purple"
}

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
return (
  <p style={styles}>Good {greeting} </p> //this type of styling will not work we have to add one for {} since its a javascript not jsx
)
}
export default greetings;

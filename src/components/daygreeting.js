//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";
//we can change the styles a/c to setting the function variable by taking the styles variable inside the function

function greetings(){
let greeting;
const date= new Date();
const styles={ // we can change the styles by taking the styles variable by taking the styles variable inside the function
  backgroundColor:"red", color:"purple"
}
const hoursofday=date.getHours();
  if(hoursofday<12){
      greeting="morning"
      styles.color="blue";
  }
  else if (hoursofday>=12 && hoursofday<=17){
      greeting="Evening";
  }
  else{ // we can change the styles by taking the styles variable by taking the styles variable inside the function
      greeting="Night";
      styles.color="blue"; //don't use , here
      styles.backgroundColor="black";
  }
return (
  <p style={styles}>Good {greeting} </p>
)
}
export default greetings;

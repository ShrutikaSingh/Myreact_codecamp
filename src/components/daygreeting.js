//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";


function greetings(){
let greeting;
const date= new Date();
const styles={
  backgroundColor:"red", color:"purple"
}
const hoursofday=date.getHours();
  if(hoursofday<12){
      greeting="morning"
      styles.color="blue"; //since styles is a object we can access its pro[erty using . operator
  }
  else if (hoursofday>=12 && hoursofday<=17){
      greeting="Evening";
  }
  else{
      greeting="Night";
      styles.color="blue";
      styles.backgroundColor="black";
  }
return (
  <p style={styles}>Good {greeting} </p>
)
}
export default greetings;

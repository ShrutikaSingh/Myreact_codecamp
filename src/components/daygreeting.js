//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";


function greetings(){
let greeting;
const date= new Date(); // change the date to 2018 and it will take the day time so the color will be red
const styles={
 color:"purple"
}
const hoursofday=date.getHours();
  if(hoursofday<12){
      greeting="morning"
      styles.color="red"; //since styles is a object we can access its property using . operator
  }
  else if (hoursofday>=12 && hoursofday<=17){
      greeting="Evening";
      styles.color="blue";
  }
  else{
      greeting="Night";
      styles.color="blue";
  }
return (
  <p style={styles}>Good {greeting}</p>

)
}
export default greetings;

//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";
{/*
function greetings(){
let greeting;
const hoursofday=date.getHours();
  if(hoursofday<12){
      greeting="Good morning";
  }
  else if (hoursofday>=12 && hoursofday<=17){
      greeting="Good Evening";
  }
  else{
      greeting="Good Night"
  }
return {greeting};
}

*/}

function dates(){
  const date=new Date().getHours();
  return (<p>it is currently about {date%12} o'clock.</p>)
}


export default dates;

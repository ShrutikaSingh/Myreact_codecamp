//write a program to wish good morning, evening and afternoon a/c to hours of day
import React from "react";

function showTime(){
  const date=new Date();
  console.log(date.getHours());
  return (<p>it is currently about {date.getHours()%12} o'clock.</p>)
}


export default showTime;

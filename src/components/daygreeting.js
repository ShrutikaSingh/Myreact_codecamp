//write a program to print the current date
import React from "react";
//printing current date

function currentDate(){
const dates= new Date();
const printdate= dates.getFullYear()+'-'+parseInt(dates.getMonth()+1)+'-'+dates.getDate();
const styles={
 color:"purple"
}
return (
  <p style={styles}>Today Date is this date : {printdate}</p>
)
}
export default currentDate;

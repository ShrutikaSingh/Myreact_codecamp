import React from "react";

//use ClassName insted of class in react
//sice class is reserved key in vanilla js
function Header(){
    return (
        <p className="navbar">This is header</p>
    )
}

export default Header;

//in vanilljs 

/*
//Get the <div> element with id="myDIV" and add the "new-class-name" class to it:
document.getElementById("myDiv").className+="new-class-name"

//Get the <div> element with id="myDIV" and add the "mystyle" class to it:
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");
}
//The classList property is not supported in Internet Explorer 9. The following code will work in all browsers:
*/
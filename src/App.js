import React from 'react';
import './App.css';

//./ means from current directory
//a functional component must return something
//see a functiononal component can return a functionional component since MyInfo is also a functional component

function App(){ 
  return (
    <div>
      <input type="checkbox" name="todo1"/>
      <p>Sending Mails</p>
      <input type="checkbox" name="todo2"/>
       <p>Reading FA</p>
      <input type="checkbox" name="todo3"/> 
      <p>Call Jethitech</p>
    </div>
    
    )
}



export default App;

import React from 'react';
import './App.css';
import  "./components/style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ShowTime from './components/daygreeting';
//./ means from current directory
//a functional component must return something
//see a functiononal component can return a functionional component since MyInfo is also a functional component

function App(){
  return (
    <div>
      <input type="checkbox" name="todo1"/>
      <Header/>
      <MainContent/>
      <Footer/>
      <ShowTime/>
    {/* <p>{Greeting.greeting(15)}</p>
     <Greeting> <p> this is {greetings.greeting}</p></Greeting> */}
    </div>
    )
}



export default App;

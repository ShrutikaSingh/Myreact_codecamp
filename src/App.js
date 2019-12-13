import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer';
//./ means from current directory

//see a functiononal component can return 
//a functionional component since MyInfo is also
//a functional component

function App(){ 
  return (
    <div>
      <MyInfo/>
      <Footer/>
    </div>
    
    )
}



export default App;

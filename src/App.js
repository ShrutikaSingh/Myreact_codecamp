import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

//./ means from current directory
//a functional component must return something
//see a functiononal component can return a functionional component since MyInfo is also a functional component

function App(){ 
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
    )
}



export default App;

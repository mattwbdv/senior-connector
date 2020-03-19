import React, { Fragment } from 'react';
import logo from './logo.png';
import './App.css';
import * as typeformEmbed from '@typeform/embed'
import './Fonts.css';



function App() {

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        In this time of physical isolation, everyone deserves to have a pen pal. 
        <br/>
        <br/>

        Scroll down and fill out our form to be matched with a like-minded person to talk politics, the weather, or anything in between.

        </header>







      <iframe frameborder="0" height="100%" src="https://koenigmattd.typeform.com/to/IdbKxJ" width="80%" height="350px" data-qa="iframe">
      </iframe>


    </div>
  );
}

export default App;



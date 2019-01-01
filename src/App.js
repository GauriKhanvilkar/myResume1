import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
       <head>
          <link href="style.css" rel="stylesheet"/>
       </head>
         <div className="relative-align">
          <h1 className = "animated bounce">Gauri Khanvilkar</h1>
          <h3 className = "animated bounce"> Software Developer </h3>  
         </div>
       
         <div class="parallax"></div>

         <div className="relative-align">
          <p className = "animated bounce">blah blah blah</p>  
         </div>
       
          


       
      </div>
    );
  }
}

export default App;

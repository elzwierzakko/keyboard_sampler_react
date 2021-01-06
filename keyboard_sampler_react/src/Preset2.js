import React from "react";
import Buttons from "./Buttons"
import './App.css';
import SamplePlayer2 from "./SamplePlayer2"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Preset2() {
  return (
    <div className="App2">
      
    <body>
    
        <div class="container">
            
            <div class="crow">
                <h1>Zwierzaks Keyboard Sampler: PRESET 2</h1>
            
            <div class="keyboard-leayout"></div>

            <ul class="sample-listing">
            
            <li class="sampler-main">
              
                <SamplePlayer2/>

            </li>

            </ul>
        </div>

    <Buttons/> 

    </div>
    </body>

</div>    

  );
}

export default Preset2

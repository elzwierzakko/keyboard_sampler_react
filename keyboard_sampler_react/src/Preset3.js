import React from "react";
import Buttons from "./Buttons"
import './App.css';
import SamplePlayer3 from "./SamplePlayer3"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Preset3() {
  return (
    <div className="App3">
      
    <body>
    
        <div class="container">
            
            <div class="crow">
                <h1>Zwierzaks Keyboard Sampler: PRESET 3</h1>
            
            <div class="keyboard-leayout"></div>

            <ul class="sample-listing">
            
            <li class="sampler-main">
              
                <SamplePlayer3/>

            </li>

            </ul>
        </div>


    <Buttons/>

    </div>
    </body>

</div>    

  );
}

export default Preset3

import React from "react";
import Buttons from "./Buttons"
import './App.css';
import SamplePlayer from "./SamplePlayer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
function Main() {
  return (
    <div className="App">
      
    <body>
    
        <div class="container">
            
            <div class="crow">
                <h1>Zwierzaks Keyboard Sampler: PRESET 1</h1>
            
            <div class="keyboard-leayout"></div>

            <ul class="sample-listing">
            
            <li class="sampler-main">
              
                <SamplePlayer/>

            </li>

            </ul>
        </div>

    <Buttons/>

    </div>
    </body>

</div>    

  );
}

export default Main

import React, { Component, useState } from "react";
import Buttons from "./Buttons"
import './App.css';
import SamplePlayer from "./SamplePlayer"

function App() {
  return (
    <div className="App">
      
    <body>
    
        <div class="container">
            
            <div class="crow">
                <h1>Zwierzaks Keyboard Sampler</h1>
            
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

export default App;

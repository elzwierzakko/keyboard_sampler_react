import React, { Component, useState } from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import PageInfo from "./PageInfo"


const Buttons = () => {
    const [infoState, infoChange] = useState(false);
    const toggleInfo = () => {
      if (infoState === true) {
        infoChange(false);
      } else {
        infoChange(true);
      }
    };
  
    return (
      <>
        <div className="youtube-info-container">

            <div className="app-info" onClick={toggleInfo}>
            </div>

            <div className="change-preset"> 
            <Link to="/">PRESET 1</Link>
            </div>
            <div className="change-preset"> 
            <Link to="/Preset2">PRESET 2</Link>
            </div>
            <div className="change-preset"> 
            <Link to="/Preset3">PRESET 3</Link>
            </div>
            </div>
        
      
        {/* end of menu element */}
  
        {/* below will display content depending on what element will be clicked. */}
  
        <div
          className={`${infoState === false ? "details_container" : "no_display"}`}
        >        
        
        {/*below is default content. Will be displayed at start.*/}
        
            <h1>PRESS THE MAPPED KEYS TO PLAY SAMPLES</h1>
            
            <p class="info">
                <ul>
                Clicking on the Info image will display APP information and video tutorial.<div class="space"></div>
                </ul> 
                <ul>Hit the Reload Icon to change the current keyboard layout to another preset.
                </ul>
            </p>
            <p class="info">The sampler will display the sample name once a mapped key is pressed. Otherwise "No Sample" message will be displayed.</p>
            
            <div id="color" class="color">    
            </div>
        
        </div>
        
        {/* <!-- page info below --> */}
  
        <div
          className={`${infoState === true ? "page_info_container" : "no_display"}`}
        >
          <PageInfo/>
        </div>
      </>
    );
    
};

export default Buttons

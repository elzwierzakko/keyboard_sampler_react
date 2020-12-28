import React, { useState } from "react";
import './App.css';


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
          <h1>APP INFO</h1>
          <p class="info">
        Zwierzaks keyboard sampler was developed by Arkadiusz Smolińśki for the sole purpose of completing
        a FRONT END REACT developer course at CODERS LAB. <div class="space"></div>
        If however you by some chance come across this application,
        feel free to use it as you see fit.<div class="space"></div>
        It is possible to use the tool as footswith connected to a bluetooth column for live preformances. <div class="space"></div>
        To change bettween pressets press the arrow icon seen to far right of the APP.<div class="space"></div>
        If you have any questions or feedback, feel free to contact me at:<div class="space"></div>

        <div>
            <p class="info">
                          
              <form
                action="mailto:el.zwierzakko@gmail.com"
                method="post"
                encType="text/plain"
              >
                <input
                  type="submit"
                  className="send button"
                  value="el.zwierzakko at gmail.com"
                ></input>
              </form>

            </p>
          </div>

        </p>
        <p class="info">
        Below you will find a video tutorial on the features and potential uses of the sampler.
        
        </p>

        <div class="info video">
        
        <iframe width="80%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

            
        </div>
      </>
    );
    
};

export default Buttons


// <div class="youtube">
// </div>

// <div class="app-info">
// </div>


// <div class="change-preset">
// </div>

// </div>
// <Buttons></Buttons>
// </div>
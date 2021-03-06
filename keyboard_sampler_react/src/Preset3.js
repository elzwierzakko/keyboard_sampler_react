import React, {useState} from "react";
import './App.css';
import SamplePlayer3 from "./SamplePlayer3"
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";
  import PageInfo from "./PageInfo";
  import KeyboardPreset3 from "./res/keyboardPreset3.jpg"
  
function Preset3() {

  const [infoState, infoChange] = useState(false);
  const toggleInfo = () => {
    if (infoState === true) {
      infoChange(false);
    } else {
      infoChange(true);
    }
  };

  return (
    <div className="App3">
      
    <body>
    
        <div className="container">
            
            <div className="crow">
                <h1>Zwierzaks Keyboard Sampler: PRESET 3</h1>
            
            <div className="keyboard-leayout"></div>

            <ul className="sample-listing">
            
            <li className="sampler-main">
              
                <SamplePlayer3/>

            </li>

            </ul>
        </div>
    {/* Below is the render of the page info and presset buttons. 
    Since these will varry depending on each preset, 
    it is placed in the corresponding files. 
    If time will alow I will export everything to seperate files/components. */}

<div className="youtube-info-container">
        <div className="app-info" onClick={toggleInfo}></div>

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

      {/* end button/preset changer element */}

      {/* below will display content depending on what element will be clicked. */}
      
      <div
        className={`${
          infoState === false ? "details_container" : "no_display"
        }`}
      >
        {/*below will be displayed as default for each preset.*/}
        
        <h1>PRESS THE MAPPED KEYS TO PLAY SAMPLES - PRESET 2</h1>

        <p className="info">
          <ul>
            Clicking on the Info image will display APP information and video
            tutorial!<div className="space"></div>
          </ul>
          <ul>
            This is the third preset. It only plays two sounds but it in combination wiht a Wireless keyboard it could be used as a footswitch of sorts for live preformances.
            When used this way it may be a good idea to remove the unused keys altogether from the keyboard so that no system keys are pressed by mistake.
          </ul>
        </p>
        <p className="info">
          ZKS will play the sound and display the sample name once a mapped key is pressed.
          Otherwise "No Sample" message will be displayed.
        </p>

        <div id="color" className="color">
        <img src={KeyboardPreset3} alt="Keyboard layout for PRESET 3"></img>
        </div>
      </div>

      {/* <!-- page info below --> */}

      <div
        className={`${
          infoState === true ? "page_info_container" : "no_display"
        }`}
      >
        <PageInfo />
      </div>

    </div>
    </body>

</div>    

  );
}

export default Preset3

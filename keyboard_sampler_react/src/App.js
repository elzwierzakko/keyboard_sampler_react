import React from  'react';
import './App.css';

const URL = "https://s3.amazonaws.com/freecodecamp/drums/";
const SOUNDFILE_NAMES_AND_KEYS = {
  Q : "Heater-1",
  W : "Kick_n_Hat",
  E : "Chord_1",
  A : "Heater-6",
  S : "punchy_kick_1", 
  D : "Brk_Snr",
  Z : "Dry_Ohh",
  X : "Heater-3",
  C : "Dsc_Oh"
}

// This is to pass the last test.
const KEYCODES = {
  81 : 'Q',
  87 : 'W',
  69 : 'E',
  65 : 'A',
  83 : 'S',
  68 : 'D',
  90 : 'Z',
  88 : 'X',
  67 : 'C'
};

class SamplePlayer extends React.Component {
  constructor(props){
    super();
    this.state = { 
      currentSoundId: ''
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
 componentDidMount() {
   document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  playSound(){
    document.getElementById(this.state.currentSoundId).play();
  }

/* Play audio with javascript
http://stackoverflow.com/questions/9419263/ddg#18628124

The Joy of HTML5 Audio: Tips & Tricks for Easy Sound Embedding
https://www.elated.com/articles/html5-audio/
*/
  
  
  /* To do:
  It would be nice if when the user presses a key from the drum pad, the "button" reacts the same way as when the user hovers them with the mouse.
  */
  handleKeyPress(event){
    
    // const key = event.key.toUpperCase();
    
    const key = KEYCODES[event.keyCode]; // this is to pass the last test.
    /* 
    Here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode 
    says that *keyCode* is deprecated and to avoid using it. 
    And here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
    it is recommended to use *key* instead.
    */
    
    const isValidKey = Object.keys(SOUNDFILE_NAMES_AND_KEYS).includes(key);
    this.setState( { currentSoundId: (isValidKey)? key : '' } );
  }
      
  handleClickPlay(event){
    this.setState( { currentSoundId: event.target.children[0].id } );
  }
  
  render() {
    let message = 'No sound';
    if (this.state.currentSoundId) {
      message = `Sound: ${SOUNDFILE_NAMES_AND_KEYS[this.state.currentSoundId]}`;
      this.playSound();  
    }
    
    return (
      <div id="sample-listing">
        <Display currentSoundText={message}/>
        <div id="sample-icons">
          {
            Object.keys(SOUNDFILE_NAMES_AND_KEYS).map((key) => {
              return (
                <SamplerMachine
                  name={key} 
                  soundFile={URL + SOUNDFILE_NAMES_AND_KEYS[key] + ".mp3"}
                  clickplayer={this.handleClickPlay}
                  key={key}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

function Display(props){
    return (
    <div id="display">
      {props.currentSoundText}
    </div>
  )
}

function SamplerMachine(props) {
  return (
    <li className="sample-icon" id={props.soundFile} onClick={props.clickplayer}>
      {props.name}
      <audio className="clip" id={props.name} src={props.soundFile} type="audio/mp3" ></audio>
    </li>
  )
}


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
        <div class="details-container">
            <h1>PRESS THE MAPPED KEYS TO PLAY SAMPLES</h1>
            <p class="info">9 samples total can be used.</p>
            <p class="info">The sampler will display the sample name once a mapped key is pressed. Otherwise "No Sample" message will be displayed.</p>
            <div id="color" class="color">    
        </div>
        
    </div>

    <div class="youtube-info-container">
    <div class="youtube">
    </div>

    <div class="app-info">
    </div>


    <div class="change-preset">
    </div>

    </div>
    
    </div>
    </body>

</div>    

  );
}

export default App;

import React from "react";
import './App.css'

//below is the sampler engine sript. This took quite a bit of time to set up. Take care to not screw it up!
//This setup is for preset 1.

const URL = "https://s3.amazonaws.com/freecodecamp/drums/";
const SOUNDFILE_NAMES_AND_KEYS = {
  7 : "Heater-1",
  8 : "Kick_n_Hat",
  9 : "Chord_1",
  4 : "Heater-6",
  5 : "punchy_kick_1", 
  6 : "Brk_Snr",
  1 : "Dry_Ohh",
  2 : "Heater-3",
  3 : "Dsc_Oh"
}

// This is to pass the last test.
const KEYCODES = {
  103 : '7',
  104 : '8',
  105 : '9',
  100 : '4',
  101 : '5',
  102 : '6',
  97 : '1',
  98 : '2',
  99 : '3'
};

class SamplePlayer2 extends React.Component {
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

  handleKeyPress(event){
    
    const key = KEYCODES[event.keyCode]; // this is to pass the last test.
    const isValidKey = Object.keys(SOUNDFILE_NAMES_AND_KEYS).includes(key);
    this.setState( { currentSoundId: (isValidKey)? key : '' } );
  }
      
  handleClickPlay(event){
    this.setState( { currentSoundId: event.target.children[0].id } );
  }
  
  render() {
    let message = 'No sound!';
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

export default SamplePlayer2
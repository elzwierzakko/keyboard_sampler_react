import React, { Component, useState } from "react";
import './App.css'

//below is the sampler engine sript. This took quite a bit of time to set up. Take care to not screw it up!
//This setup is for preset 1.

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

export default SamplePlayer
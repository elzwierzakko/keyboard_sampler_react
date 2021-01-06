import React, { Component, useState } from "react";
import './App.css';
import SamplePlayer from "./SamplePlayer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from "./Main"
import Preset2 from "./Preset2"
import Preset3 from "./Preset3"

function PageInfo() {
    return (
    <div>
          <h1>APP INFO</h1>
          <p className="info">
        Zwierzaks keyboard sampler was developed by Arkadiusz Smolińśki for the sole purpose of completing
        a FRONT END REACT developer course at CODERS LAB. <div className="space"></div>
        If however you by some chance come across this application,
        feel free to use it as you see fit.<div className="space"></div>
        It is possible to use the tool as footswith connected to a bluetooth column for live preformances. <div className="space"></div>
        To change bettween pressets press the arrow icon seen to far right of the APP.<div className="space"></div>
        If you have any questions or feedback, feel free to contact me at:<div className="space"></div>

        <div>
            <p className="info">
                          
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
        <p className="info">
        Below you will find a video tutorial on the features and potential uses of the sampler.
        
        </p>

        <div className="info video">
        
        <iframe width="80%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

        </div>

      );
      
};

export default PageInfo
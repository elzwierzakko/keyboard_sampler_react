import React from "react";
import "./App.css";
import Sample1 from "./samples/sample1.wav";
import Sample2 from "./samples/sample2.wav";

//below is the sampler engine sript. This took quite a bit of time to set up. Take care to not screw it up!
//This setup is for preset 3.

function SamplePlayer3() {
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
      document.getElementById("Sample1").play();
      return false;
    }
    if (e.keyCode == 13) {
      document.getElementById("Sample2").play();
      return false;
    }
  });
  return (
    <div>
      <div id="display">Local samples 1 & 2</div>
      <div className="local-samples">
        <li className="sample-icon">
          {Sample1}
          <audio id="Sample1" src={Sample1}></audio>
        </li>
        <li className="sample-icon">
          {Sample2}
          <audio id="Sample2" src={Sample2}></audio>
        </li>
      </div>
    </div>
  );
}

export default SamplePlayer3;

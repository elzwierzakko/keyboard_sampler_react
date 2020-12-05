import './App.css';


function App() {
  return (
    <div className="App">
      
    <body>
    
        <div class="container">
            
            <div class="crow">
                <h1>Zwierzaks Keyboard Sampler</h1>
            
            <div class="keyboard-leayout"></div>

            <ul class="sample-listing">
            <li class="sample1">
                <p>"L SHIFT"</p>
                <p>SAMPLE 1</p>

                <audio id="sample1" controls style={{display:"none"}}>
                <source src="res/sample1.wav" type="audio/mpeg"></source>
                </audio>
                
                <audio id="sample3" style={{display:"none"}}>
                <source src="res/sample3.wav" type="audio/mpeg"></source>
                </audio>

                <audio id="sample5" controls style={{display:"none"}}>
                <source src="res/sample5.wav" type="audio/mpeg"></source>
                </audio>

                <audio id="sample7" controls style={{display:"none"}}>
                <source src="res/sample7.wav" type="audio/mpeg"></source>
                </audio>

            </li>
            
            <li class="change-sample-group">
                <p>"Y"</p>
                <p>NEXT PRESET</p>

                <div class="change-sample-group"></div>
            </li>

            <li class="sample2">
                <p>"R SHIFT"</p>
                <p>SAMPLE 2</p>

                <audio id="sample2" controls style={{display:"none"}}>
                <source src="res/sample2.wav" type="audio/mpeg"></source>

                <audio id="sample4" controls style={{display:"none"}}>
                <source src="res/sample4.wav" type="audio/mpeg"></source>
                </audio>

                <audio id="sample6" controls style={{display:"none"}}>
                <source src="res/sample6.wav" type="audio/mpeg"></source>
                </audio>

                <audio id="sample8" controls style={{display:"none"}}>
                <source src="res/sample8.wav" type="audio/mpeg"></source>
                </audio>
              </audio>
            </li>
            </ul>
        </div>
        <div class="selected-preset-color">
            <h1>PRESS "Y" TO FOR NEXT PRESET</h1>
            <p class="info">There are 8 sample presets in total. Each has it's own color.</p>
            <p class="info">Each sample preset can contain 2 samples. Use the R and L SHIFT keys to play the samples. The "Y" key will change sample preset.</p>
            <div id="color" class="color">
            PRESET 1        
        </div>
    </div>
    </div>
    </body>

</div>    

  );
}

export default App;

import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from "./Main"
import Preset2 from "./Preset2"
import Preset3 from "./Preset3"

function App() {
    return (
      <Router>
        <div>
         
                <Link to="/" style={{display: "none"}}></Link>
              
                <Link to="/Preset2" style={{display: "none"}}></Link>
              
                <Link to="/Preset3" style={{display: "none"}}></Link>


  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

          <Switch>
          <Route exact path="/">
              <Main />
            </Route>
            <Route path="/preset2">
              <Preset2 />
            </Route>
            <Route path="/preset3">
              <Preset3 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
export default App
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import UserProfile from "./pages/userProfile";
import Home from "./pages/home";


import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  withRouter,
} from "react-router-dom";

function App() {
  return (
  
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/userProfile" component={UserProfile} />
        </Switch>
        </BrowserRouter>

      </div>
   
  );
}

export default App;

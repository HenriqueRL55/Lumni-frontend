
import React from "react";
import "./App.css";
import RoutesFunction from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
      <div >
        <Router>
          <RoutesFunction/>
        </Router>
      </div>
    );
}

export default App;

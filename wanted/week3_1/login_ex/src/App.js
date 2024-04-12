import { Link } from "react-router-dom";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <Link to="./login">Log In</Link>
      </div>
      <div>
        <Link to="./signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default App;

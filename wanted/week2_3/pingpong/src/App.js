import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const a = axios.get("http://localhost:5001/ping");
  console.log(a);
  return <div className="App">1</div>;
}

export default App;

console.log();

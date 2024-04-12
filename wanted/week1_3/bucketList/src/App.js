import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './App.css';
import './components.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  ) ;
};

export default App;
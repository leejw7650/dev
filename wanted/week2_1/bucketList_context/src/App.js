import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './App.css';
import './components.css';
import { BucketContext } from "./context/BucketContext";

function App() {
  const [bucketList, setBucketList] = useState([]);
  return (
    <div className="App">
      <BucketContext.Provider value={{bucketList, setBucketList}}>
        <RouterProvider router={router}></RouterProvider>
      </BucketContext.Provider>
    </div>
  ) ;
};

export default App;
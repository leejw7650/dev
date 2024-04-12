import React from "react";

import router from "./router";
import { RouterProvider, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  ) ;
};

export default App;
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import EditPage from "./components/EditPage";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "edit/:date",
    element: <EditPage />,
  },
]);

export default router;

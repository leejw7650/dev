import { createBrowserRouter } from "react-router-dom";
import ListPage from "../pages/ListPage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
]);

export default router;

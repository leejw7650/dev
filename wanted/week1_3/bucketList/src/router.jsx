import Main from "./components/Main";
import InputList from "./components/InputList"
import {createBrowserRouter} from "react-router-dom";
import Detail from "./components/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/detail/:bucket",
        element: <Detail />
    }
]);

export default router;
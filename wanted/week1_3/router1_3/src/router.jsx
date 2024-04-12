import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

const router = createBrowserRouter(
    [
        {
            path : "/",
            element : <Home />,
        },
        {
            id: 1,
            path : "/Cat",
            element : <Cat />,
        },
        {
            path : "/Dog",
            element : <Dog />,
        },
    ]
);

export default router;
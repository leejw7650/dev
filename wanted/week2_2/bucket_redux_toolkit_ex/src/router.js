import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import DetailPage from './components/DetailPage';

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
        },
        {
            id: 1,
            path:"/detail/:idx",
            element:<DetailPage />
        },
    ]
);

export default router;
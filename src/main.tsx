import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './component/pages/main-page/main-page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

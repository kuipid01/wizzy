import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,Outlet ,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
const Layout  = () => {
  return (
    <div>
 <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode>, */}
)

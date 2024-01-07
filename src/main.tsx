import ReactDOM from "react-dom/client";
import 'simplebar';
import 'simplebar/dist/simplebar.css';

import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Signup from "./pages/Signup.tsx";
import Dashboard from "./pages/Dashboard.tsx";
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        element: <Signup />,
      },
      {
        path: '/dashboard/:id',
        element: <Dashboard />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode>, */}
);

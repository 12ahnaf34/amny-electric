import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Specializations from "./routes/Specializations/Specializations";
import Locations from "./routes/Locations/Locations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/specializations",
    element: <Specializations />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

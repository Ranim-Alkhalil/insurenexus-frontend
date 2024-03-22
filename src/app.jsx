import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseComponent from "./components/base/BaseComponent";
import Profile from "./components/pages/normalUser/profile/Profile";
import SignIn from "./components/pages/signIn/SignIn";
import Home from "./components/pages/home/Home";
import Facilities from "./components/pages/normalUser/profile/Facilities";
import Panel from "./components/pages/normalUser/profile/Panel";
import personalInformation from "./components/pages/normalUser/profile/PersonalInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "signin", element: <SignIn /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);

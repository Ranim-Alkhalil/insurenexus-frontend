import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import TopAppBar from "./components/base/TopAppBar";
import LeftDrawer from "./components/base/LeftDrawer";
import BaseComponent from "./components/base/BaseComponent";
import Header from "./components/companys select/Header_company";
import About from "./components/about_us/About";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <BaseComponent />
    <Header />
  </React.StrictMode>
);

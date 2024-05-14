import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import BaseComponent from "./components/base/BaseComponent";
import Home_page from "./components/home_page_/Home_page";
import Footer_pages from "./components/footer_section/Footer_pages";
import About from "./components/about_us/About";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BaseComponent />
    <About />
  </React.StrictMode>,
  document.getElementById("root")
);

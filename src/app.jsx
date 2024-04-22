import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import BaseComponent from "./components/base/BaseComponent";
import Header from "./components/companys select/companies_page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <BaseComponent />
    <Header />
  </React.StrictMode>
);

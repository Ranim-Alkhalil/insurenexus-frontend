import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppBar, CssBaseline, Stack, Toolbar } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseComponent from "./components/base/BaseComponent";
import SignIn from "./components/pages/signIn/SignIn";

import { SnackbarProvider } from "notistack";
import Profile from "./components/pages/profile/Base";
import NormalUserProfile from "./components/pages/profile/normal/Base";
import NexusEmployeeProfile from "./components/pages/profile/nexusEmployee/Base";
import InsuranceEmployeeProfile from "./components/pages/profile/insuranceEmployee/Base";
import CompanyEmployeeProfile from "./components/pages/profile/companyEmployee/Base";
import Tools from "./components/pages/tools/Base";
import NormalUserTools from "./components/pages/tools/normal/Base";
import NexusEmployeeTools from "./components/pages/tools/nexusEmployee/Base";
import InsuranceEmployeeTools from "./components/pages/tools/insuranceEmployee/Base";
import CompanyEmployeeTools from "./components/pages/tools/companyEmployee/Base";
import Header from "./components/pages/companys select/companies_page";
import About from "./components/pages/about_us/About";
import Company from "./components/pages/company/Company";
import Home_page from "./components/pages/home_page_/Home_page";
import AdminProfile from "./components/pages/profile/Admin/Base";
import AdminTools from "./components/pages/tools/Admin/Base";
import ForgotPassword from "./components/pages/signIn/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
    children: [
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "normal",
            element: <NormalUserProfile />,
          },
          {
            path: "insurance-employee",
            element: <InsuranceEmployeeProfile />,
          },
          {
            path: "company-employee",
            element: <CompanyEmployeeProfile />,
          },
          {
            path: "nexus-employee",
            element: <NexusEmployeeProfile />,
          },
          {
            path: "admin",
            element: <AdminProfile />,
          },
        ],
      },
      {
        path: "tools",
        element: <Tools />,
        children: [
          {
            path: "normal",
            element: <NormalUserTools />,
          },
          {
            path: "insurance-employee",
            element: <InsuranceEmployeeTools />,
          },
          {
            path: "company-employee",
            element: <CompanyEmployeeTools />,
          },
          {
            path: "nexus-employee",
            element: <NexusEmployeeTools />,
          },
          {
            path: "admin",
            element: <AdminTools />,
          },
        ],
      },
      { path: "signin", element: <SignIn /> },
      { path: "home", element: <Home_page /> },
      { path: "company/:companyName", element: <Company /> },
      { path: "companiesPage", element: <Header /> },
      { path: "aboutUs", element: <About /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);

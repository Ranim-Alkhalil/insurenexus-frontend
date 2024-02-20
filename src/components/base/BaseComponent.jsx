import { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import TopAppBar from "./TopAppBar";
import Home from "../pages/home/Home";
import MyFacilities from "../pages/MyFacilities";
import { Box } from "@mui/material";

export default function BaseComponent(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleToggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  return (
    <>
      <TopAppBar toggleDrawer={handleToggleDrawer} />
      <LeftDrawer open={openDrawer} closeDrawer={handleCloseDrawer} />
    </>
  );
}

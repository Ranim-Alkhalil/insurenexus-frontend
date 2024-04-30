import { useState } from "react";
import Panel from "./Panel";
import PersonalInformation from "./PersonalInformation";
import Insurances from "./Insurances";
import Facilities from "./Facilities";
import { Outlet } from "react-router-dom";

export default function NormalUserProfile(props) {
  const [selectedPanel, setSelectedPanel] = useState("personalInfo");
  return (
    <>
      <Outlet />
      <Panel setSelectedPanel={setSelectedPanel} />
      {selectedPanel === "personalInfo" && <PersonalInformation />}
      {selectedPanel === "insurances" && <Insurances />}
      {selectedPanel === "facilities" && <Facilities />}
    </>
  );
}

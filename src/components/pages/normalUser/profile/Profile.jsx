import { useState } from "react";
import Panel from "./Panel";
import PersonalInformation from "./PersonalInformation";
import Insurances from "./Insurances";
import Facilities from "./Facilities";

export default function Profile(props) {
  const [selectedPanel, setSelectedPanel] = useState("personalInfo");
  return (
    <>
      <Panel setSelectedPanel={setSelectedPanel} />
      {selectedPanel === "personalInfo" && <PersonalInformation />}
      {selectedPanel === "insurances" && <Insurances />}
      {selectedPanel === "facilities" && <Facilities />}
    </>
  );
}

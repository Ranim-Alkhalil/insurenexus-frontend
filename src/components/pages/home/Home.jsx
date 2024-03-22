import { Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "../../base/BaseComponent";

export default function Home(props) {
  const { user } = useContext(GlobalStates);
  return <Typography>{user.firstName}</Typography>;
}

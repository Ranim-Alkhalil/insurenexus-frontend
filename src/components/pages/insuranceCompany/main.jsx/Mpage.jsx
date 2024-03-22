import { Rowing } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

export default function Mpage(props) {
  return (
    <Stack
      flexWrap={"wrap"}
      flexDirection={"row"}
      gap={10}
      width="100%"
      height="100%"
      marginTop={30}
      justifyContent={"center"}
    >
      <Box
        bgcolor={"#0f3554"}
        color={"white"}
        height={200}
        width={300}
        fontSize={30}
        textAlign={"center"}
      >
        Input insurance information
      </Box>
      <Box
        bgcolor={"#0f3554"}
        color={"white"}
        height={200}
        width={300}
        fontSize={30}
        textAlign={"center"}
      >
        Input Subsribers
      </Box>
    </Stack>
  );
}

import { Box, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

export default function CompInfo(props) {
  return (
    <div className="perInfoBox">
      <h1 className="header">Personal information</h1>
      <div>
        <Typography className="profileLabel" fontSize={20}>
          Name
        </Typography>
        <Box className="profileInfo">
          <Typography className="profileContent" fontSize={25}>
            Ali Ahmad
          </Typography>
        </Box>
      </div>
      <div>
        <Typography className="profileLabel" fontSize={20}>
          Email
        </Typography>
        <Box className="profileInfo">
          <Typography className="profileContent" fontSize={25}>
            Ali@outlook.com
          </Typography>
        </Box>
      </div>
      <div>
        <Typography className="profileLabel" fontSize={20}>
          National ID
        </Typography>
        <Box className="profileInfo">
          <Typography className="profileContent" fontSize={25}>
            2000628742
          </Typography>
        </Box>
      </div>
      <div>
        <Typography className="profileLabel" fontSize={20}>
          Phone Number
        </Typography>
        <Box className="profileInfo">
          <Typography className="profileContent" fontSize={25}>
            {"0796427945"}
          </Typography>
        </Box>
      </div>
    </div>
  );
}

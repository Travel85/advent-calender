import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrentDateHeader from "./CurrentDateHeader";

export const Titleheader = () => {
  return (
    <Box sx={{}}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontFamily: `"Henny Penny", system-ui`,
          fontWeight: 400,
          fontStyle: "normal",
          paddingTop: "30px",
        }}
      >
        Adventskalender
      </Typography>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <CurrentDateHeader />
      </Box>
    </Box>
  );
};
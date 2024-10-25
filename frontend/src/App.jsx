import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CssBaseline from "@mui/material/CssBaseline";
import { Titleheader } from "./components/Titleheader";
import { Box } from "@mui/material";
import { CardDay } from "./components/CardDay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

// Create a theme instance
let theme = createTheme();
// Make typography responsive
theme = responsiveFontSizes(theme);

function App() {
  const [doors, setDoors] = useState([
    {
      id: uuidv4(),
      number: 1,
      image: "/1.jpg",
      day: "2024-10-24",
      giftImageURL: "./gifts/dmbio-hummus-natur.jpg",
      gift: "Heute gibt es Humus!",
    },
    {
      id: uuidv4(),
      number: 2,
      image: "/2.jpg",
      day: "2024-10-25",
      giftImageURL: "",
      gift: "Heute gibt es Kekse!",
    },
    {
      id: uuidv4(),
      number: 2,
      image: "/2.jpg",
      day: "2024-10-26",
      giftImageURL: "",
      gift: "Heute gibt es Schnitzel!",
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          theme="dark"
        />
        <CssBaseline />
        <Titleheader></Titleheader>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {doors.map((door) => {
            return (
              <Fragment key={door.id}>
                <CardDay
                  number={door.number}
                  image={door.image}
                  day={door.day}
                  giftImageURL={door.giftImageURL}
                  gift={door.gift}
                ></CardDay>
              </Fragment>
            );
          })}
          {/* <CardDay day={1}></CardDay>
          <CardDay day={2}></CardDay> */}
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;

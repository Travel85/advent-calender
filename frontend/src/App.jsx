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
      day: "2024-12-01",
      giftImageURL: "./gifts/1.jpg",
      gift: "Heute gibt es Sallys Flex Design Schlitzwender groß",
    },
    {
      id: uuidv4(),
      number: 2,
      image: "/2.jpg",
      day: "2024-12-02",
      giftImageURL: "./gifts/2.jpg",
      gift: "Heute gibt es saure Haribos",
    },
    {
      id: uuidv4(),
      number: 3,
      image: "/3.jpg",
      day: "2024-12-03",
      giftImageURL: "./gifts/3.jpg",
      gift: "Heute geht es zum Weihnachtsmarkt nach Karlsruhe",
    },
    {
      id: uuidv4(),
      number: 4,
      image: "/4.jpg",
      day: "2024-12-04",
      giftImageURL: "./gifts/4.jpg",
      gift: "Heute geht es ins Reisebüro zur Kreuzfahrtberatung für die Flitterwochen",
    },
    {
      id: uuidv4(),
      number: 5,
      image: "/5.jpg",
      day: "2024-12-05",
      giftImageURL: "./gifts/5.jpg",
      gift: "Heute gibt es Sallys Tortenring 10cm",
    },
    {
      id: uuidv4(),
      number: 6,
      image: "/6.jpg",
      day: "2024-12-06",
      giftImageURL: "./gifts/6.jpg",
      gift: "Heute gibt es einen Concealer",
    },
    {
      id: uuidv4(),
      number: 7,
      image: "/7.jpg",
      day: "2024-12-07",
      giftImageURL: "./gifts/7.jpg",
      gift: "Heute geht es zum Weihnachtsmarkt nach Pforzheim",
    },
    {
      id: uuidv4(),
      number: 8,
      image: "/8.jpg",
      day: "2024-12-08",
      giftImageURL: "./gifts/8.jpg",
      gift: "Heute gibt es eine entspannte Massage",
    },
    {
      id: uuidv4(),
      number: 9,
      image: "/9.jpg",
      day: "2024-12-09",
      giftImageURL: "./gifts/9.jpg",
      gift: "Heute gibt es Sallys Kuchentester Stäbchenprobe",
    },
    {
      id: uuidv4(),
      number: 10,
      image: "/10.jpg",
      day: "2024-12-10",
      giftImageURL: "./gifts/10.jpg",
      gift: "Heute gibt es Cashew Nüsse",
    },
    {
      id: uuidv4(),
      number: 11,
      image: "/11.jpg",
      day: "2024-12-11",
      giftImageURL: "./gifts/11.jpg",
      gift: "Heute gibt es Sallys Springformboden 20cm",
    },
    {
      id: uuidv4(),
      number: 12,
      image: "/12.jpg",
      day: "2024-12-12",
      giftImageURL: "./gifts/12.jpg",
      gift: "Heute gibt es leckeres Sushi",
    },
    {
      id: uuidv4(),
      number: 13,
      image: "/13.jpg",
      day: "2024-12-13",
      giftImageURL: "./gifts/13.jpg",
      gift: "Heute gibt es Sallys Backformmesser",
    },
    {
      id: uuidv4(),
      number: 14,
      image: "/14.jpg",
      day: "2024-12-14",
      giftImageURL: "./gifts/14.jpg",
      gift: "Heute gibt es Backtrennspray",
    },
    {
      id: uuidv4(),
      number: 15,
      image: "/15.jpg",
      day: "2024-12-15",
      giftImageURL: "./gifts/15.jpg",
      gift: "Heute koche ich Abendessen für meinen Schatzi",
    },
    {
      id: uuidv4(),
      number: 16,
      image: "/16.jpg",
      day: "2024-12-16",
      giftImageURL: "./gifts/16.jpg",
      gift: "Heute gibt es Socken",
    },
    {
      id: uuidv4(),
      number: 17,
      image: "/17.jpg",
      day: "2024-12-17",
      giftImageURL: "./gifts/17.jpg",
      gift: "Heute gibt es Brezelchen",
    },
    {
      id: uuidv4(),
      number: 18,
      image: "/18.jpg",
      day: "2024-12-18",
      giftImageURL: "./gifts/18.jpg",
      gift: "Heute gibt es Sallys Tortenretter",
    },
    {
      id: uuidv4(),
      number: 19,
      image: "/19.jpg",
      day: "2024-12-19",
      giftImageURL: "./gifts/19.jpg",
      gift: "Heute gibt es Humus",
    },
    {
      id: uuidv4(),
      number: 20,
      image: "/20.jpg",
      day: "2024-12-20",
      giftImageURL: "./gifts/20.jpg",
      gift: "Heute gibt es Sallys Tortenring Winkelpalette",
    },
    {
      id: uuidv4(),
      number: 21,
      image: "/21.jpg",
      day: "2024-12-21",
      giftImageURL: "./gifts/21.jpg",
      gift: "Heute holen wir Essen beim Panda Imbiss",
    },
    {
      id: uuidv4(),
      number: 22,
      image: "/22.jpg",
      day: "2024-12-22",
      giftImageURL: "./gifts/22.jpg",
      gift: "Heute haben wir einen romantischem Fernsehabend",
    },
    {
      id: uuidv4(),
      number: 23,
      image: "/23.jpg",
      day: "2024-12-23",
      giftImageURL: "./gifts/23.jpg",
      gift: "Heute gibt es einen Piccolo",
    },
    {
      id: uuidv4(),
      number: 24,
      image: "/24.jpg",
      day: "2024-12-24",
      giftImageURL: "./gifts/24.jpg",
      gift: "Heute gibt es Sallys Gusseisen Brotbackform inkl. Brotskalpell",
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
        minWidth: "100%",
        paddingBottom: "20px",
      }}
    >
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-center" autoClose={4000} theme="dark" />
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

import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CardActionArea from "@mui/material/CardActionArea";
import { Fragment } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";
import CardDayModal from "./CardDayModal";
import { DateTime } from "luxon";
import { toast } from "react-toastify";

export function CardDay({ number, image, day, giftImageURL, gift }) {
  //check if current day is equal to or older than the current day
  const currentDate = DateTime.now();
  const compareDate = (currentDate, futureDate) => {
    //  console.log(`Future date from Import: ${futureDate}`);
    const futureDateISO = DateTime.fromISO(futureDate);

    // console.log(`Current day: ${currentDate} future day: ${futureDateISO}`);
    return currentDate.startOf("day") >= futureDateISO.startOf("day");
  };

  //console.log(compareDate(currentDate, "2024-10-25"));
  //used to show OffercardDtails of Offercard
  const [open, setOpen] = useState(false);
  // const onModal = () => setOpen(!open);
  const onModal = () => {
    if (compareDate(currentDate, day)) {
      setOpen(!open);
    } else {
      toast.warn(`Du musst dich noch ein bisschen gedulden 😊`);
    }
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <Card
          sx={{
            "&:hover": {
              boxShadow: 15,
            },
            maxWidth: 300,
            height: 355,
            bgcolor: "DodgerBlue",
          }}
        >
          <CardActionArea onClick={onModal}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: "black" }}>{number}</Avatar>}
            ></CardHeader>
            <CardMedia
              sx={{
                objectFit: "cover",
                maxHeight: "225px",
              }}
              component="img"
              height="auto"
              image={image}
              alt="Day ${number}"
            ></CardMedia>
            <CardContent
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {compareDate(currentDate, day) ? <LockOpenIcon /> : <LockIcon />}
            </CardContent>
          </CardActionArea>
        </Card>
        {/* {showModal()} */}
        {open && (
          <CardDayModal
            open={open}
            setOpen={setOpen}
            day={day}
            giftImageURL={giftImageURL}
            gift={gift}
            number={number}
          ></CardDayModal>
        )}
      </Paper>
    </Fragment>
  );
}

import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";

export default function CardDayModal({
  open,
  setOpen,
  day,
  giftImageURL,
  gift,
  number,
}) {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Modal styling */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Layout for content  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "5%",
            }}
          >
            <Typography id="modal-modal-title" variant="h6">
              Türchen Nummer {number}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              gutterBottom
            >
              <img
                src={giftImageURL}
                style={{
                  width: "80%",
                  height: "auto",
                }}
              ></img>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {gift}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

import React, { useRef } from "react";
import { useState } from "react";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "emailjs-com";

function ContactForm() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  const form = useRef();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uoekwwm",
        "template_icxpp8s",
        e.target,
        "lwK16SEhhciCv1THz",
      )
      .then(
        (result) => {
          console.log(result.text, "Message Sent");
          setState(true);
          setOpen(true);
        },
        (error) => {
          console.log(error.text, "ERROR message not sent");
          setState(false);
          setOpen(true);
        },
      );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        maxWidth: "80%",
        pt: 4,
        pb: 4,
        pr: { lg: 4 },
        pl: { lg: 4 },
        m: { xs: "auto", lg: "0" },
      }}
    >
      <Typography
        variant="h4"
        color={"white"}
        gutterBottom
        sx={{ pt: 10, pb: 1 }}
      >
        Contact
      </Typography>
      <Box component="form" onSubmit={sendEmail}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="user_name"
              label="Name"
              name="user_name"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="user_email"
              label="Email"
              name="user_email"
              type="email"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {state ? (
          <Alert onClose={handleClose} severity="success">
            Form submitted successfully
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error">
            Failed to submit form, please try again
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
}

export default ContactForm;

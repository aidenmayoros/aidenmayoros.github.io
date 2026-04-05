import { useState } from "react";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import emailjs from "emailjs-com";

function ContactForm() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

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
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text, "ERROR message not sent");
          setState(false);
          setOpen(true);
          setIsSending(false);
        },
      );
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "rgba(5, 23, 41, 0.8)",
      "& fieldset": {
        borderColor: "var(--line-soft)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(79, 209, 197, 0.3)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--accent)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "var(--text-muted)",
      fontSize: "0.875rem",
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        maxWidth: { xs: "100%", lg: "90%" },
        pt: 4,
        pb: 4,
        px: { xs: 2, md: 3 },
        m: { xs: "auto", lg: "0" },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight={700}
        sx={{ pb: 0.5, fontFamily: '"Inter", sans-serif', fontSize: "1.75rem" }}
      >
        Contact
      </Typography>
      <Typography
        sx={{ color: "var(--text-secondary)", mb: 3, fontSize: "0.94rem", lineHeight: 1.6 }}
      >
        If you are hiring, collaborating, or just want to connect, send me a message.
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
              sx={inputSx}
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
              sx={inputSx}
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
              sx={inputSx}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={isSending}
              sx={{ fontSize: "0.875rem" }}
            >
              {isSending ? "Sending..." : "Send Message"}
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

import { Box, Grid } from "@mui/material";
import RightSide from "./components/RightSide";
import "./App.css";
import LeftSide from "./components/LeftSide";

function Home() {
  return (
    <Box id="home-page" sx={{ position: "relative" }}>
      <Grid container sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid item xs={12} lg={5}>
          <LeftSide />
        </Grid>
        <Grid item xs={12} lg={7}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

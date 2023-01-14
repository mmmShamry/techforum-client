import React, { useEffect } from "react";
import { Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import logo from "../../assets/logo/logoinvert.png";
import axios from "axios";

const Home = () => {
  const checkHealth = async () => {
    const response = await axios.get("Health_controller/healthCheck");
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Box
          sx={{
            width: "900px",
            height: "550px",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <Box p={3} height="400px">
            <center>
              <img src={logo} alt="techforum Logo" height="60" />
              <br />
              <br />
              <Typography variant="h2" sx={{ marginTop: "100px" }}>
                Welcome to TechForum
              </Typography>
              <Typography>
                Get Solution to all your Technical Queries
              </Typography>
            </center>

            <Box p={3}>
              <center>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "100px" }}
                  >
                    Get Started
                  </Button>
                </Link>
              </center>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo/logoinvert.png";
import axios from "axios";
import { setTokens } from "../../utils/User";
import { useNavigate, Link } from "react-router-dom"; 
import './style.css'

const Login = () => {
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate()

  const loginUser = async () => {
    let formBody = new FormData();
    formBody.append("email", email);
    formBody.append("password", pw);

      // const response = await axios.post("user_controller/logIn", formBody)

      await axios({
        method : "post",
        url:"user_controller/logIn",
        data:formBody,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setError(false);
        persistUser(response.data.data);
        setTimeout(() => navigate('/questions'), 1000);
      })
      .catch((err) => {
        setError(true);
        setErrMsg(err.response.data.message)
        console.log(err.response.data.message)
      });

  };

  const persistUser = (user) => {
    setTokens(user?.id, user?.token, user?.firstName, user?.lastName);
    setUser(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
      
  };

  return (
    <>
      {error ? (
        <Snackbar open={error} autoHideDuration={2000}>
          <Alert severity="error" sx={{ width: "100%" }}>
            {errMsg}
          </Alert>
        </Snackbar>
      ) : null}

      {user ? (
        <Snackbar open={user} autoHideDuration={2000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Login Successful
          </Alert>
        </Snackbar>
      ) : null}

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
              width: "300px",
              height: "450px",
              padding: "20px",
              border: "1px solid black",
            }}
          >
            <center>
              <img src={logo} alt="techforum Logo" height="60" />
              <br />
              <br />
              <Typography>Welcome Back</Typography>
            </center>
            <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
              <Box mb={2}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box mb={4}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
              </Box>
              <center>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Sign In
                </Button>
              </center>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link style={{textDecoration: 'none'}}  to="/signUp">
              <Typography className="signUpLink">Sign Up for TechForum</Typography>
            </Link>
          </Box>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

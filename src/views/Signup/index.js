import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import Box  from '@mui/material/Box'
import Grid  from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import logo from '../../assets/logo/logoinvert.png'
import axios from 'axios'
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { setTokens } from '../../utils/User'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [pw,setPw] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rePw, setRePw] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [unMatchingPw, setUnMatchingPw] = useState(false);

    const navigate = useNavigate()

    const signUpUser = async () => {
      if(pw === rePw){
        setUnMatchingPw(false)
        let formBody = new FormData();
        formBody.append("email", email);
        formBody.append("password", pw);
        formBody.append("firstName", firstName);
        formBody.append("lastName", lastName)

        await axios({
          method : "post",
          url:"user_controller/signUp",
          data:formBody,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setError(false);
            persistUser(response.data.data);
        })
        .catch((err) => {
          setError(true);
          setErrorMessage(err.response.data.message)
        });

      }else{
        setUnMatchingPw(true)
      }
        
    }

    const persistUser = (user) => {
      setTokens(user?.id, user?.token, user?.firstName, user?.lastName);
      setUser(user);
    };

    const handleSubmit =(event) =>{
        event.preventDefault();

        signUpUser()

        if(!error && user){
          setTimeout(() => navigate("/questions"), 1000);
        }
        
    }


  return (
    <>
    {error ? (
        <Snackbar open={error} autoHideDuration={2000}>
          <Alert severity="error" sx={{ width: "100%" }}>
            {errorMessage}
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
      <Grid item >
        <Box sx={{width : '300px', height : '550px', padding : '20px', border : '1px solid black'}}>
            <center>
            <img src={logo} alt="techforum Logo" height="60" />
            <br/>
            <br/>
            <Typography>Sign Up</Typography>
            </center>
        <form onSubmit={handleSubmit} style={{marginTop:'30px'}}>
        <Box mb={2}>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              required
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              required
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
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
          <Box mb={2}>
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
          <Box mb={2}>
            <TextField
              error={unMatchingPw}
              helperText={unMatchingPw && "Please make sure your passwords match"}
              label="Re-Enter Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={rePw}
              onChange={(e) => setRePw(e.target.value)}
            />
          </Box>
          <center>
            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
          </center>
          
        </form>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default SignUp
import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import Box  from '@mui/material/Box'
import Grid  from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import logo from '../../assets/logo/logoinvert.png'

const SignUp = () => {

    const [pw,setPw] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rePw, setRePw] = useState("");

    const handleSubmit =(event) =>{
        event.preventDefault();

        const user = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : pw
        }

        console.log(user)

        setEmail("")
        setPw("")
        setFirstName("")
        setLastName("")
        setRePw("")
        
    }


  return (
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
              label="Re Enter Password"
              type="password"
              variant="outlined"
              required
              fullWidth
              value={rePw}
              onChange={(e) => setRePw(e.target.value)}
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
          <center>
            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
          </center>
          
        </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignUp
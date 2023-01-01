import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import Box  from '@mui/material/Box'
import Grid  from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import logo from '../../assets/logo/logoinvert.png'

const Login = () => {

    const [pw,setPw] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit =(event) =>{
        event.preventDefault();

        const user = {
            email : email,
            password : pw
        }

        console.log(user)

        setEmail("")
        setPw("")
        
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
        <Box sx={{width : '300px', height : '450px', padding : '20px', border : '1px solid black'}}>
            <center>
            <img src={logo} alt="techforum Logo" height="60" />
            <br/>
            <br/>
            <Typography>Welcome Back</Typography>
            </center>
        <form onSubmit={handleSubmit} style={{marginTop:'30px'}}>
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
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
          </center>
          
        </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login
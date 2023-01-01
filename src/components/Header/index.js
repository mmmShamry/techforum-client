import React from 'react'
import logo from '../../assets/logo/logo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Header = ({user}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar sx={{backgroundColor : 'black'}}>
            <Box sx={{ mr: 2, flexGrow: 1, alignItems:'center' }} display='flex' >
                <img src={logo} alt="techforum Logo" height="60" />
                <Link style={{textDecoration: 'none'}} to="/questions/ask">
                  <Button sx={{height:'40px'}} variant='contained'>Ask question</Button>
                </Link>
            </Box>
            <Typography>
                test user
            </Typography>
            <Button sx={{height:'40px', ml : 2}} variant='contained' color="error">Log Out</Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
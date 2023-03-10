import React from 'react'
import logo from '../../assets/logo/logo.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { getActiveUserName, removeTokens } from '../../utils/User';
import axios from 'axios';
import './style.css'


const Header = () => {
  const activeUser = getActiveUserName()
  const navigate = useNavigate();

  const logOutUser = async ()=>{
    const response = await axios.get('user_controller/logOut')
  }

  const handleLogOut = (e) =>{
    e.preventDefault();
    logOutUser()
    removeTokens();
    setTimeout(() => navigate('/login'), 1500);
  }

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
            <Link style={{textDecoration: 'none'}} to="/self">
            <Typography className='HeaderName'>
                {activeUser}
            </Typography>
            </Link>
            <Button sx={{height:'40px', ml : 2}} variant='contained' color="error" onClick={handleLogOut}>Log Out</Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
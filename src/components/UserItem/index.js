import { Box, Typography } from '@mui/material';
import React from 'react'
import { getUserEmail, getUserName } from '../../utils/User'
import './style.css'

const UserItem = ({user}) => {
    const userName = getUserName(user);
    const userEmail = getUserEmail(user);

  return (
    <Box className='userItem'>
        <Typography variant="h6" className='name'>{userName}</Typography>
        <br/>
        <Typography varient="body1">{userEmail}</Typography>
    </Box>
  )
}

export default UserItem
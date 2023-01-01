import React from 'react'
import Header from '../Header'
import Navigation from '../Navigation'
import { Box } from '@mui/material'
import './style.css'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Navigation />
        <Box p={2} className = 'content'>{children}</Box>
      </Box>
    </React.Fragment>
  );
}

export default Layout
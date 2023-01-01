import React from 'react'
import { Box } from '@mui/material'
import {Grid }from '@mui/material'

const Container = ({children}) => {
  return (
    <Grid >
    <Grid item lg={12} md={12}>
      <Box pl={4} pr={4}>{children}</Box>
    </Grid>
  </Grid>
  )
}

export default Container
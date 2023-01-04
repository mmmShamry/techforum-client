import { Box, Typography } from '@mui/material';
import React from 'react'
import { getTagDescription, getTagName } from '../../utils/Tag'
import './style.css'

const TagItem = ({tag}) => {
    const tagName =  getTagName(tag);
    const tagDecription = getTagDescription(tag);
  return (
    <Box className='tagItem'>
        <Typography variant="h6" className='tag'>{tagName}</Typography>
        <br/>
        <Typography varient="body1">{tagDecription}</Typography>
    </Box>
  )
}

export default TagItem
import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

const TextArea = ({
    value,
    classes,
    rows = 4,
    maxLength,
    mb = '20px',
    rowsMax = 100,
    inputProps = {},
    multiline = true,
    ...props
}) => {
  return (
    <Box mb={mb !== undefined ? mb : maxLength && '20px'}>
    <TextField
      minRows={rows}
      value={value}
      maxRows={rowsMax}
      multiline={multiline}
      inputProps={{ ...inputProps, maxLength }}
      {...props}
    />
    {maxLength && (
      <Box textAlign="right">
        <Typography component="small" color="textSecondary">
          {(typeof value === 'string' && value.length) || 0}/{maxLength}
        </Typography>
      </Box>
    )}
  </Box>
  )
}

export default TextArea
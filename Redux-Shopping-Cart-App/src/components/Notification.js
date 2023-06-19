import React from 'react'
import {Alert} from '@mui/material'

export const Notification = ({type,message}) => {
  return (
    <div>
        <Alert severity={type}>{message}</Alert>
    </div>
  )
}

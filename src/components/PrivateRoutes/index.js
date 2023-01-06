import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { getActiveUserId, getActiveUserToken } from '../../utils/User'


const PrivateRoutes = () => {
  const token = getActiveUserToken();
  const id = getActiveUserId()

    return (
    token && id ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoutes
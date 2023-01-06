import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { getActiveUserId, getActiveUserToken } from '../../utils/User'

const LogginRoute = () => {
 
    const token = getActiveUserToken();
    const id = getActiveUserId()

    return (
        token && id ? <Navigate to="/questions" /> : <Outlet/>
    )
  
}

export default LogginRoute
import React, {useState, useEffect} from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Layout from '../../components/Layout'
import axios from 'axios'
import UserItem from '../../components/UserItem'


const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get('user_controller/getAllUsers');
    setUsers(response.data.data)
  }
  useEffect(()=>{
    getUsers();
  },[])

  return (
    <Layout>
        <Box>
            <Typography variant='h4'>All Users</Typography>
        </Box>
        <br/>
        <Divider variant='middle'/>
        <br/>
        <Box>
          {users.map((u)=>(<UserItem user={u} key={u.Id}/>))}
        </Box>
    </Layout>
    
  )
}

export default Users
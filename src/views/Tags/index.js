import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import TagItem from '../../components/TagItem'
import './style.css'
import { Box, Divider, Typography } from '@mui/material'
const Tags = () => {
  
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    const response = await axios.get('tag_controller');
    setTags(response.data.data)
  }

  useEffect(()=>{
    getTags();
  },[])
  
  return (
    <Layout>
        <Box>
            <Typography variant='h4'>All Tags</Typography>
        </Box>
        <br/>
        <Divider variant='middle'/>
        <br/>
        <Box>
          {tags.map((t)=>(<TagItem tag={t} key={t.id}/>))}
        </Box>
    </Layout>
    
  )
}

export default Tags
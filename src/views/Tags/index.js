import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import TagItem from '../../components/TagItem'
import './style.css'
import { Box, Divider, Typography, Button, TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextArea from '../../components/TextArea'

const Tags = () => {
  
  const [tags, setTags] = useState([]);
  const[open, setOpen] =useState(false)
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('')
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  const getTags = async () => {
    const response = await axios.get('tag_controller/getAllTags');
    setTags(response.data.data)
  }

  const openForm = () => {
    setOpen(true)
  }

  const handleSubmit = async () => {

    if(tagName === '' || tagDescription === ''){
      setError(true);
      setErrorMsg("All fields are Mandatory")
    }else{
      const formData = new FormData();
    
       formData.append("name", tagName.toLowerCase());
       formData.append("description",tagDescription)

       const resp = await axios.post('tag_controller/addTag', formData);

       if(resp){
        setTagName('');
        setTagDescription('')
        setOpen(false)

        setTimeout(() => getTags(), 2000);
       }
    }
    
  }

  useEffect(()=>{
    getTags();
  },[])
  
  return (
    <Layout>
        <Box className='tagHead'>
            <Typography variant='h5'>All Tags</Typography>
            <Button variant="contained" color="primary" onClick={()=>openForm()}>Add Tag</Button>
        </Box>
        <br/>
        <Divider variant='middle'/>
        <br/>
        <Box>
          {tags.map((t)=>(<TagItem tag={t} key={t.id}/>))}
        </Box>
        <Dialog open={open} maxWidth='md' fullWidth>
          <DialogTitle>Add Tag</DialogTitle>
          <DialogContent>
            {error && <Typography variant='body1'>{errorMsg}</Typography>}
            <Box mb={2} mt={2}>
              <TextField
                value={tagName}
                placeholder="Tag Name"
                onChange={(e)=>{setTagName(e.target.value)}}
                fullWidth
                label="Name"
                required
                type="text"
              />
            </Box>
            <Box mb={2}>
              <TextArea
                value={tagDescription}
                placeholder="Tag Description"
                onChange={(e)=>{setTagDescription(e.target.value)}}
                fullWidth
                required
                label="Description"
                maxLength={50}
              />
            </Box>
            
            
          </DialogContent>
          <DialogActions>
              <Button variant="contained" color="primary" onClick={()=>handleSubmit()}>Submit</Button>
          </DialogActions>
        </Dialog>
    </Layout>
    
  )
}

export default Tags
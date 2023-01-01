import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Layout from '../../../components/Layout';
import Stack  from '@mui/system/Stack';
import AnswerItem from '../../../components/AnswerItem';
import Typography from '@mui/material/Typography';

const Question = () => {
    const {id} = useParams();
    const [answers,setAnswers] = useState([]);

    const getAnswers = async () => {
        const response = await axios.get(`http://localhost/techforum/index.php/api/answer_controller/getAnswerByQuestion?Id=${id}`);
        setAnswers(response.data.data)
    }

    useEffect(()=>{
        getAnswers();
      },[]);

  return (
    <Layout>
        <div>Question {id}</div>
        <Typography variant="h4">All Answers</Typography>
      <br/>
        <Stack spacing={2}>
            {answers.map(a=>(<AnswerItem answer={a} key={a.Id}/>))}
        </Stack>
    </Layout>
  )
}

export default Question
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Layout from '../../components/Layout'
import QuestionItem from '../../components/QuestionItem';
import Stack  from '@mui/system/Stack';
import Typography from '@mui/material/Typography';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const response = await axios.get('question_controller/getAllQuestions');
    setQuestions(response.data.data)
  }

  useEffect(()=>{
    getQuestions();
  },[])

  return (
    <Layout>
      <Typography variant="h4">All Questions</Typography>
      <br/>
        <Stack spacing={2}>
            {questions.map(q=>(<QuestionItem question={q} key={q.Id}/>))}
        </Stack>
    </Layout>
    
  )
}

export default Questions
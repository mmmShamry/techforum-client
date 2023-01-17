import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import Layout from "../../../components/Layout";
import AnswerItem from "../../../components/AnswerItem";
import QuestionItem from "../../../components/QuestionItem";
import { getActiveUserId } from "../../../utils/User";
import Button from "@mui/material/Button";
import TextArea from "../../../components/TextArea";
import "./style.css";

const Question = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(null);
  const [myAnswer, setMyAnswer] = useState("");
  const [error, setError] = useState(false);

  const userId = getActiveUserId();

  const getQuestion = async () => {
    const response = await axios.get(
      `question_controller/getQuestionById?Id=${id}`
    );
    setQuestion(response.data.data);
  };

  const getAnswers = async () => {
    const response = await axios.get(
      `answer_controller/getAnswerByQuestion?Id=${id}`
    );
    setAnswers(response.data.data);
  };

  useEffect(() => {
    getQuestion();
    getAnswers();
  }, []);

  const handleSubmit = () => {
    if(myAnswer === ""){
      setError(true);
    }else{
      let today = new Date().toISOString().slice(0, 10);

      const formData = new FormData();
      
      formData.append("body", myAnswer);
      formData.append("createdDate", today)
      formData.append("userId", userId);
      formData.append("questionId", id)

      const resp = axios.post(`answer_controller/addAnswer?uId=${userId}`, formData);
      if(resp){
        setMyAnswer('');
        setTimeout(() => getAnswers(), 2000);
        
      }
    }
  }

  return (
    <Layout>
      <QuestionItem question={question} showData={true} />
      <br />
      <Typography variant="h5">All Answers</Typography>
      <br />
      <Box className="answerContainer">
        <Stack spacing={2}>
          {answers.map((a) => (
            <AnswerItem answer={a} key={a.Id} />
          ))}
        </Stack>
      </Box>

      <Divider variant="middle" />
      <br/>
      <Typography variant="h5">My Answer</Typography>
      <Box width={"60%"} mt={1}>
        {error && <Typography variant="body1">All fields are Mandatory</Typography>}
        <TextArea
          value={myAnswer}
          onChange={(e) => {
            setMyAnswer(e.target.value);
          }}
          fullWidth
          required
          label="Answer"
        />
        <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Box>
    </Layout>
  );
};

export default Question;

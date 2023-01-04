import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../../components/Layout";
import Stack from "@mui/system/Stack";
import AnswerItem from "../../../components/AnswerItem";
import Typography from "@mui/material/Typography";
import QuestionItem from "../../../components/QuestionItem";
import { Box } from "@mui/material";

const Question = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(null);

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
    </Layout>
  );
};

export default Question;

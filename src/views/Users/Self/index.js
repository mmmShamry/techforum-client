import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { getActiveUserId, getActiveUserName } from "../../../utils/User";
import QuestionItem from "../../../components/QuestionItem";
import AnswerItem from "../../../components/AnswerItem";
import { Typography, Box, Divider } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/system/Stack";
import "./style.css";

const Self = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  const [tabValue, setTabValue] = useState(0);

  const userId = getActiveUserId();
  const userName = getActiveUserName();

  const deleteQuestion = async (id) => {
    const response = await axios.delete(`question_controller/deleteQuestion?Id=${id}&uId=${userId}`)
    if(response.status === 202){
        setQuestions(questions.filter((q)=> q.Id !== id))
    }
  }

  const deleteAnswer = async (id) => {
    const response = await axios.delete(`answer_controller/deleteAnswer?Id=${id}&uId=${userId}`)
    if(response.status === 202){
        setAnswers(answers.filter((a)=> a.Id !== id))
    }
  }
  
  const getQuestions = async () => {
    const response = await axios.get(
      `question_controller/getQuestionByUser?Id=${userId}`
    );
    setQuestions(response.data.data);
  };

  const getAnswers = async () => {
    const response = await axios.get(
      `answer_controller/getAnswerByUser?Id=${userId}`
    );
    setAnswers(response.data.data);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }

  const checkDeleteQuestion = (id) => {
   deleteQuestion(id);
  }

  const checkDeleteAnswer = (id) => {
    deleteAnswer(id);
  }

  useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);

  return (
    <Layout>
      <Box>
        <Typography className="name">{userName}</Typography>
        <Box className="personalData" marginBottom={2}>
          <Typography>{`Questions : ${questions.length}`}</Typography>
          <Typography>{`Answers : ${answers.length}`}</Typography>
        </Box>
        <Divider />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="My Questions" value={0} />
              <Tab label="My Answers" value={1} />
            </Tabs>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabValue === 0 && (
              <Box>
                {questions.length === 0 ? (
                  <Typography>No Questions Found</Typography>
                ) : (
                  <Stack spacing={2}>
                    {questions.map((q) => (
                      <QuestionItem
                        question={q}
                        key={q.Id}
                        showData={true}
                        enableDelete={true}
                        onDelete={checkDeleteQuestion}
                      />
                    ))}
                  </Stack>
                )}
              </Box>
            )}

            {tabValue === 1 && (
              <Box>
                {answers.length === 0 ? (
                  <Typography>No Answers Found</Typography>
                ) : (
                  <Stack spacing={2}>
                    {answers.map((a) => (
                      <AnswerItem answer={a} key={a.Id} enableDelete={true} onDelete={checkDeleteAnswer}/>
                    ))}
                  </Stack>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Self;

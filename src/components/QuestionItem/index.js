import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import {
  getQuestionId,
  getQuestionBody,
  getQuestionTitle,
  getQuestionOwner,
  getTotalAnswers,
  getQuestionCreatedDate,
} from "../../utils/Question";
import "./style.css";

const QuestionItem = ({ question, showData = false }) => {
  const questionId = getQuestionId(question);
  const questionBody = getQuestionBody(question);
  const questionTitle = getQuestionTitle(question);
  const questionOwner = getQuestionOwner(question);
  const totalAnswers = getTotalAnswers(question);
  const questionDate = getQuestionCreatedDate(question);

  const questionUrl = `/questions/${questionId}`;

  return (
    <>
      {showData ? (
        <>
          <Box key={questionId}>
            <Typography variant="h5" gutterBottom>
              {questionTitle}
            </Typography>
            <br />
            <Typography varient="body1">{questionBody}</Typography>
          </Box>
          <Box className="questionData">
            <Typography className="questionDataText">{`On : ${questionDate}`}</Typography>
            <Typography className="questionDataText">{`Asked by : ${questionOwner}`}</Typography>
          </Box>
          <Divider variant="middle" />
        </>
      ) : (
        <Card key={questionId} className="qCard">
          <CardContent>
            <Link style={{ textDecoration: "none" }} to={questionUrl}>
              <Typography variant="h5" gutterBottom className="questionTitle">
                {questionTitle}
              </Typography>
            </Link>
            <Typography varient="body1">{questionBody}</Typography>
            <Box className="questionData">
              <Typography className="questionDataText">{`Answers : ${totalAnswers}`}</Typography>
              <Typography className="questionDataText">{`Asked by : ${questionOwner}`}</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default QuestionItem;

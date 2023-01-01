import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Link } from "react-router-dom";
import {
  getQuestionId,
  getQuestionBody,
  getQuestionTitle,
  getQuestionOwner,
  getTotalAnswers,
} from "../../utils/Question";
import './style.css'

const QuestionItem = ({ question }) => {
    const questionId = getQuestionId(question);
  const questionBody = getQuestionBody(question);
  const questionTitle = getQuestionTitle(question);
  const questionOwner = getQuestionOwner(question);
  const totalAnswers = getTotalAnswers(question);

  const questionUrl = `/questions/${questionId}`

  return (
    <Card key={questionId} className="qCard">
      <CardContent>
        <Link style={{textDecoration: 'none'}}  to={questionUrl}>
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
  );
};

export default QuestionItem;

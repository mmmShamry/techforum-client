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
  getQuestionCreatedDate,
} from "../../utils/Question";
import "./style.css";

const QuestionItem = ({ question, showData = false , onDelete, enableDelete = false}) => {
  const questionId = getQuestionId(question);
  const questionBody = getQuestionBody(question);
  const questionTitle = getQuestionTitle(question);
  const questionOwner = getQuestionOwner(question);
  const totalAnswers = getTotalAnswers(question);
  const questionDate = getQuestionCreatedDate(question);

  const questionUrl = `/questions/${questionId}`;

  const handleDelete = (id) => (onDelete(id))

  return (
    <>
      {showData ? (
        <>
        <Box borderBottom='1px solid'>
        <Box key={questionId}>
            <Typography variant="h5" gutterBottom>
              {questionTitle}
            </Typography>
      
            <Typography varient="body1">{questionBody}</Typography>
          </Box>
          <Box className="questionData">
            <Typography className="questionDataText">{`On : ${questionDate}`}</Typography>
            {enableDelete ? (
              <Typography className="deleteButton" onClick ={() =>handleDelete(questionId)}>Delete</Typography>
            ) : (
              <Typography className="questionDataText">{`Asked by : ${questionOwner}`}</Typography>
            )}
          </Box>
        </Box>
          
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

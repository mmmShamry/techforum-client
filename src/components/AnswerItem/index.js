import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

import {
  getAnswerBody,
  getAnswerDate,
  getAnswerId,
  getAnswerOwner,
 // getAnswerOwnerId,
} from "../../utils/Answer";

import './style.css'

const AnswerItem = ({ answer, onDelete, enableDelete = false }) => {
  const answerId = getAnswerId(answer);
  const answerBody = getAnswerBody(answer);
  const answerOwner = getAnswerOwner(answer);
  // const userId = getAnswerOwnerId(answer);
  const date = getAnswerDate(answer);
  
  const handleDelete = (id) => (onDelete(id))
  
  return (
    <Card key={answerId} className="aCard">
      <CardContent>
        <Typography varient="body1">{answerBody}</Typography>
        <Box className="answerData">
          <Typography className="answerDataText">{`On : ${date}`}</Typography>
          {enableDelete ? (
            <Typography className="deleteButton" onClick ={() =>handleDelete(answerId)}>Delete</Typography>
          ):(
            <Typography className="answerDataText">{`By : ${answerOwner}`}</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnswerItem;

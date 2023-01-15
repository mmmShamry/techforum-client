import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Select from "react-select";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import TextArea from "../../../components/TextArea";
import Button from "@mui/material/Button";
import { getActiveUserId } from "../../../utils/User";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AskQuestion = () => {
  const [tags, setTags] = useState([]);
  const [tagOpetions, setTagOptions] = useState([]);
  const [selectedOpetions, setSelectedOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [error, setError] = useState(false);

  const userId = getActiveUserId();
  const navigate = useNavigate();

  const getTags = async () => {
    const response = await axios.get("tag_controller/getAllTags");
    setTags(response.data.data);
  };

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    if (tags) {
      const t = tags.map(({ Name: label, Name: value }) => ({ value, label }));
      setTagOptions(t);
    }
  }, [tags]);

  const handleSelect = (data) => {
    const t = data;
    setSelectedOptions(t);
  };

  const handleSubmit = async () => {
    if (title === "" || questionBody === "" || tags.length === 0) {
      setError(true);
    } else {
      setError(false);
      let today = new Date().toISOString().slice(0, 10);
      const t = selectedOpetions.map((a) => a.value.toLowerCase());

      
      const formData = new FormData();
      
      formData.append("title", title)
      formData.append("body", questionBody)
      formData.append("createdDate", today)
      formData.append("userId", userId)
      formData.append("tags", t.toString())

      const resp = await axios.post('question_controller/addQuestion', formData)
        if(resp){
          setTitle('')
          setQuestionBody('');
          setSelectedOptions([]);

          setTimeout(() => navigate("/questions"), 1000);
        }
    }
  };

  return (
    <Layout>
      <Typography variant="h5">Ask a Question</Typography>
      <br />
      {error && (
        <Typography className="error">All fields are Mandatory</Typography>
      )}
      <Box width={"60%"}>
        <Box mb={2}>
          <TextField
            label="Title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Box>

        <Box mb={2}>
          <TextArea
            value={questionBody}
            placeholder="Question"
            onChange={(e) => {
              setQuestionBody(e.target.value);
            }}
            fullWidth
            required
            label="Question"
          />
        </Box>

        <Box mb={2}>
          <Select
            isMulti
            name="tags"
            options={tagOpetions}
            placeholder="Tags"
            value={selectedOpetions}
            onChange={handleSelect}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Box>
    </Layout>
  );
};

export default AskQuestion;

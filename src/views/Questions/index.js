import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Layout from "../../components/Layout";
import QuestionItem from "../../components/QuestionItem";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import { TextField, Box, Button } from "@mui/material";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [tagOpetions, setTagOptions] = useState([]);
  const [selectedOpetion, setSelectedOption] = useState(null);

  const getQuestions = async () => {
    const response = await axios.get("question_controller/getAllQuestions");
    setQuestions(response.data.data);
  };

  const getSearchQuestions = async (query, tag) => {
    const response = await axios.get(
      `question_controller/searchQuestion?search=${query}&tag=${tag}`
    );
    setQuestions(response.data.data);
  };

  const getTags = async () => {
    const response = await axios.get("tag_controller/getAllTags");
    setTags(response.data.data);
  };

  const handleSelect = (data) => {
    const t = data;
    setSelectedOption(t);
  };

  const handleSearch = async () => {
    const data = {
      search: searchQuery,
      tag: selectedOpetion ? selectedOpetion?.value : "",
    };
    getSearchQuestions(data.search, data.tag);
  };

  useEffect(() => {
    getQuestions();
    getTags();
  }, []);

  useEffect(() => {
    if (tags) {
      const t = tags.map(({ Name: label, Name: value }) => ({ value, label }));
      setTagOptions(t);
    }
  }, [tags]);

  return (
    <Layout>
      <Typography variant="h4">All Questions</Typography>
      <Box p={2}>
        <Box mb={2}>
          <TextField
            label="Search"
            type="text"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Select
            name="tags"
            options={tagOpetions}
            placeholder="Tags"
            value={selectedOpetion}
            onChange={handleSelect}
            isClearable
          />
        </Box>
        <Button onClick={() => handleSearch()}>Search</Button>
      </Box>

      <br />
      <Stack spacing={2}>
        {questions.map((q) => (
          <QuestionItem question={q} key={q.Id} />
        ))}
      </Stack>
    </Layout>
  );
};

export default Questions;

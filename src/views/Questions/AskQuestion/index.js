import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Select from "react-select";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const AskQuestion = () => {
  const [tags, setTags] = useState([]);
  const [tagOpetions, setTagOptions] = useState([]);
  const [selectedOpetions, setSelectedOptions] = useState([]);
  const [title, setTitle] = useState('');

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const getTags = async () => {
    const response = await axios.get("tag_controller");
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
    setSelectedOptions(data);
    console.log(selectedOpetions);
  };

  return (
    <Layout>
      <Box>
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
          <Select
            isMulti
            name="tags"
            options={tagOpetions}
            placeholder="Tags"
            value={selectedOpetions}
            onChange={handleSelect}
          />
        </Box>

        <Box mb={2}>
          <Editor editorState={editorState} onChange={setEditorState} />;
        </Box>
      </Box>
    </Layout>
  );
};

export default AskQuestion;

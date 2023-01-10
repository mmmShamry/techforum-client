import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import Select from "react-select";
import axios from "axios";

const AskQuestion = () => {
  const [tags, setTags] = useState([]);
  const [tagOpetions, setTagOptions] = useState([]);
  const [selectedOpetions, setSelectedOptions] = useState([]);

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
      <Select
        isMulti
        name="tags"
        options={tagOpetions}
        placeholder="Tags"
        value={selectedOpetions}
        onChange={handleSelect}
      />
    </Layout>
  );
};

export default AskQuestion;

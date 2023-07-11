import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

const SearchPage = () => {
  const [courses, setCourses] = useState(null);
  const { searchQuery } = useParams();

  const getSearchCourses = async () => {
    const response = await axios.get(
      `http://localhost:5000/courses/search/${searchQuery}`
    );
    const data = await response.data;
    setCourses(data);
  };

  useEffect(() => {
    getSearchCourses();
  }, [searchQuery]);
  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Box>
          <Typography variant="h1" fontWeight={"bold"}>
            Search Result for {searchQuery}
          </Typography>
        </Box>
        <Box
          p={"2rem"}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"2rem"}
          justifyContent={"center"}
        >
          {courses?.map((course) => (
            <Box sx={{ flexBasis: "30%" }}>
              <Card item={course} type={"ViewCard"} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;

import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "../../components/Card";
import axios from "axios";
//import courses from "../../data/courses";

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    const response = await axios.get(
      "http://localhost:5000/courses/Allcourses"
    );
    const data = await response.data;
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Box>
          <Typography variant="h1" fontWeight={"bold"}>
            Courses.
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

export default CoursesPage;

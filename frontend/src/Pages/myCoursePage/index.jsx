import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import axios from "axios"
import state from "../../state";
import Card from "../../components/Card"

const MyCourse = () => {
  const { palette } = useTheme();
  const [myCourses, setMyCourses] = useState(null);
  const userId = useSelector((state) => state.user._id);

  const getMyCourses = async () => {
    const response=axios.get(`http://localhost:5000/courses/mycourses/${userId}`);
    const data=(await response).data;
    setMyCourses(data);
  };

  useEffect(()=>{
    getMyCourses();
  },[])

  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Box>
          <Typography variant="h1" fontWeight={"bold"}>
            My Courses.
          </Typography>
          <br />
          <Typography variant="h4">
            {" "}
            All your registered courses are shown here. Happy Learning.
          </Typography>
        </Box>
        <Box
          p={"2rem"}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"2rem"}
          justifyContent={"center"}
        >
          {myCourses?.map((course) => (
            <Box sx={{ flexBasis: "30%" }}>
              <Card item={course} type={"PlayCard"}/>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MyCourse;

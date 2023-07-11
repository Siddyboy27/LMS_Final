import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Box, Button, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import state from "../../state";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
const CompletedPage = () => {
  const { palette } = useTheme();
  const [completedCourses, setCompletedCourses] = useState(null);
  const userId=useSelector((state)=>state.user._id);
  const navigate=useNavigate();


  const getCompletedCourses = async () => {
    const response = axios.get(
      `http://localhost:5000/courses//mycourses/completed/${userId}`
    );
    const data = (await response).data;
    setCompletedCourses(data);
  };

  useEffect(() => {
    getCompletedCourses();
  }, []);




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
        {completedCourses?.length !== 0 ? (
          <Box
            p={"2rem"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"2rem"}
            justifyContent={"center"}
          >
            {completedCourses?.map((course) => (
              <Box sx={{ flexBasis: "30%" }}>
                <Card item={course} type={"finish"} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box p={"2rem"} gap={"2rem"} textAlign={"center"}>
            <Typography variant="h1" fontWeight={"bold"}>
              No courses completed
            </Typography>
            <br />
            <Button
              sx={{
                width: "65%",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
              onClick={() => navigate('//myCourses')}
            >
              <Typography variant="h4" fontWeight={"bold"}>
                Check your registered courses to complete them.
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CompletedPage;

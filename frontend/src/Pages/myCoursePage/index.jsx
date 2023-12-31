import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import state from "../../state";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const { palette } = useTheme();
  const [myCourses, setMyCourses] = useState(null);
  const userId = useSelector((state) => state.user._id);
  const navigate = useNavigate();

  const getMyCourses = async () => {
    const response = axios.get(
      `http://localhost:5000/courses/mycourses/${userId}`
    );
    const data = (await response).data;
    setMyCourses(data);
  };

  useEffect(() => {
    getMyCourses();
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
        {myCourses?.length !== 0 ? (
          <Box
            p={"2rem"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"2rem"}
            justifyContent={"center"}
          >
            {myCourses?.map((course) => (
              <Box sx={{ flexBasis: "30%" }}>
                <Card item={course} type={"PlayCard"} />
              </Box>
            ))}
          </Box>
        ) : (
          <Box p={"2rem"} gap={"2rem"} textAlign={"center"}>
            <Typography variant="h1" fontWeight={"bold"}>
              No courses Registered.
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
              onClick={() => navigate('/courses')}
            >
              <Typography variant="h4" fontWeight={"bold"}>
                Go to Courses.
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MyCourse;

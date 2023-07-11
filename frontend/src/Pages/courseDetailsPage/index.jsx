import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import { Box, Button, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const { palette } = useTheme();
  const user = useSelector((state) => state.user);
  const userId = user._id;

  const isRegistered = Boolean(user.coursesRegistered[course?._id]);
  console.log(isRegistered);
  const dispatch = useDispatch();

  const getCourse = async () => {
    const response = await axios.get(
      `http://localhost:5000/courses/${courseId}`
    );
    const data = await response.data;

    setCourse(data);
  };

  useEffect(() => {
    getCourse();
  }, []);

  const registerCourse = async () => {
    const response = axios.patch(
      `http://localhost:5000/courses//registerCourse/${course._id}`,
      { userId }
    );
    const updatedUser = (await response).data;
    dispatch(setUser({ user: updatedUser }));
    window.location.reload();
  };

  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Box
          width="100%"
          height="100%"
          p={"5rem"}
          textAlign={"center"}
          sx={{
            backgroundColor: palette.primary.main,
            justifyContent: "center",
            borderRadius: "1rem",
          }}
        >
          <img
            src="https://picsum.photos/200/300"
            style={{
              height: "15rem",
              width: "15rem",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
          <Typography
            p={"2rem"}
            variant="h1"
            sx={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            {course?.name}
          </Typography>
        </Box>
        <Box p={"1rem"}>
          <Typography variant="h3" sx={{ fontWeight: "600" }}>
            {course?.description}
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Details on this course:
          </Typography>

          <Box p={"1rem"}>
            <Box
              sx={{
                backgroundColor: palette.background.alt,
                borderRadius: "5px",
                lineHeight: "5rem",
                width: "fit-content",
              }}
              p="1rem"
            >
              <ul>
                {course?.details?.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="h5">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {!isRegistered ? (
              <Button
                sx={{
                  width: "65%",
                  p: "1rem",
                  backgroundColor: palette.primary.main,
                  color: palette.background.alt,
                  "&:hover": { color: palette.primary.main },
                }}
                onClick={registerCourse}
              >
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  Register for this course.
                </Typography>
              </Button>
            ) : (
              <Button
                sx={{
                  width: "65%",
                  p: "1rem",
                  backgroundColor: "green",
                  color: palette.background.alt,
                  "&:hover": { color: palette.primary.main },
                }}
                onClick={registerCourse}
              >
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  Registered. Click to deregister.
                </Typography>
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetailPage;

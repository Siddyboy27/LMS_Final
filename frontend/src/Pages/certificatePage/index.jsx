import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import Certificate from "../../components/Certificate";
const CertificatePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const { palette } = useTheme();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  

  const getCourse = async () => {
    const response = await axios.get(
      `http://localhost:5000/courses/${courseId}`
    );
    const data = await response.data;

    setCourse(data);
  };

  useEffect(() => {
    if (!user.courseComplete[courseId]) {
      alert("You have not finished or registered for this course");
      navigate(`/courses/${courseId}`);
    } else getCourse();
  }, []);

  

  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Button
          sx={{
            width: "35%",
            p: "1rem",
            backgroundColor: palette.primary.main,
            color: palette.background.alt,
            "&:hover": { color: palette.primary.main },
          }}
          onClick={()=>window.print()}
        >
          <Typography style={{ fontWeight: "bold" }} variant="h4">
            Print/Save
          </Typography>
        </Button>
        <br />
        <br />

        <Certificate name={course?.name} user={user} />
      </Box>
    </Box>
  );
};

export default CertificatePage;

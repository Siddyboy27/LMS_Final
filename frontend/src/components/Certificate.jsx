import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import state from "../state";
import { useParams } from "react-router-dom";



const Certificate = ({ user,name }) => {
  const { palette } = useTheme();
  
  return (
    
          <Box textAlign={"center"} border={"1px solid black"} p={"1rem"} >
            <Typography color={"primary"} variant="h1" fontSize={"10rem"}>
              LMS.
            </Typography>
            <br />
            <Typography>
              This is to certify that{" "}
              <span style={{ fontWeight: "bold" }}>
                {user.firstName} {user.lastName}
              </span>{" "}
              has completed the course{" "}
              <span style={{ fontWeight: "bold" }}>{name}</span>
            </Typography>
            <br />
            <Typography variant="h1" fontWeight={"bold"}>
              Congratulations
            </Typography>
          </Box>
  );
};

export default Certificate;

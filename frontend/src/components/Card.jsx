import { Typography, Button, useTheme, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSelector } from "react-redux";
import state from "../state";
import { useEffect, useState } from "react";
import Certificate from "./Certificate";
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';




const Card = ({ item, type }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [cardType, setCardType] = useState("ViewCard");

  useEffect(() => {
    if (user.coursesRegistered[item._id]) setCardType("PlayCard");
    else if (user.courseComplete[item._id]) setCardType("finish");
  }, []);

  return (
    <div className="card">
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image"></div>
      </div>
      <div className="card-content">
        <h2 className="name">{item.name}</h2>

        <p className="description">{item.description}</p>

        {cardType === "ViewCard" && (
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={() => navigate(`/courses/${item._id}`)}
          >
            <Typography style={{ fontWeight: "bold" }}>View more</Typography>
          </Button>
        )}
        {cardType === "PlayCard" && (
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={() => navigate(`/mycourses/${item._id}`)}
          >
            <PlayArrowIcon />
          </Button>
        )}
        {cardType === "finish" && (
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: "#8CC739",
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={()=>navigate(`/completed/certificate/${item._id}`)}
          >
           
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography fontWeight={"bold"}>Course completed</Typography>
              <CheckCircleOutlineIcon />
            </Box>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Card;

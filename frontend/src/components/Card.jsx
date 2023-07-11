import { Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

const Card = ({ item, type }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image"></div>
      </div>
      <div className="card-content">
        <h2 className="name">{item.name}</h2>

        <p className="description">{item.description}</p>

        {type === "ViewCard" && (
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={() => navigate(`/courses/${item.id}`)}
          >
            <Typography style={{ fontWeight: "bold" }}>View more</Typography>
          </Button>
        )}
        {type === "PlayCard" && (
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={() => navigate(`/mycourses/`)}
          >
            <PlayArrowIcon/>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Card;

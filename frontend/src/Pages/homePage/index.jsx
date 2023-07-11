import React from "react";
import Navbar from "../navbar";
import { Box, useTheme } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import courses from "../../data/courses";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useSelector } from "react-redux";



const HomePage = () => {

  const {palette}=useTheme();
  const navigate = useNavigate();
  
  
  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Typography variant="h1">Hey there.</Typography>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ padding: "2.5rem" }}
        >
          {courses.slice(0, 10).map((course) => (
            <SwiperSlide key={course.id}>
              <Card item={course} type={"ViewCard"}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box p={5} sx={{ textAlign: "center" }}>
          <Typography variant="h1">Looking for more courses?</Typography>
          <Button
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={()=>navigate('/courses')}
          >
            <Typography style={{fontWeight:"bold"}}>Click here to view more</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

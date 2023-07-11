import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Box, Button, useTheme } from "@mui/material";
import { Typography } from "@mui/material";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import state from "../../state";
import { setUser } from "../../state";
const CourseStudy = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const user = useSelector((state) => state.user);
  const userId=user._id;
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { palette } = useTheme();

  const getCourse = async () => {
    const response = await axios.get(`http://localhost:5000/courses/${courseId}`);
    const data = await response.data;

    setCourse(data);
  };

  useEffect(() => {
    if (!user.coursesRegistered[courseId]) {
      alert("Course is not registered. Redirecting to course page.");
      navigate(`/courses/${courseId}`);
    } else getCourse();
  }, []);


  const FinishCourse=async()=>{
    const response=axios.patch(`http://localhost:5000/courses/finish/${courseId}`,{userId});
    const updatedUser = (await response).data;
    dispatch(setUser({ user: updatedUser }));
    alert("Course is complete. You will redirected to your completion page");
    navigate("/completed");
  }

  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="2rem 6%" gap="0.rem">
        <Box>
          <Typography variant="h1" fontWeight={"bold"}>
            {course?.name}
          </Typography>
        </Box>

        <Box width="100%" padding="2rem 6%" bgcolor={palette.background.alt}>
          <Typography lineHeight={"3rem"} variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            illo ex officiis ullam ipsa expedita. Eligendi necessitatibus quasi
            adipisci dolorem recusandae, vel delectus quas veritatis.
            Voluptatibus doloribus nam deleniti saepe. Aliquam, beatae.
            Asperiores saepe quo, numquam aliquam odio, laboriosam unde quam
            aspernatur iusto laudantium dolores neque deleniti fuga ipsa
            accusantium quasi nam a nostrum veniam earum beatae dolore vitae
            error? Dolore alias magnam ut ex nobis at dolor accusamus
            dignissimos illum provident, officiis cupiditate eius quasi magni
            necessitatibus quaerat, eos voluptatibus aut dolorem excepturi rem
            odit doloribus. Laborum, dolores ipsa! Id illo sunt modi atque
            labore. Hic nisi recusandae tenetur id nam ducimus quaerat
            accusantium nihil eos at nemo, molestias rerum repellat, ratione
            voluptates fugiat. Dolores molestias culpa sequi magni! Obcaecati,
            amet ipsa repudiandae nihil ratione, maiores soluta animi neque,
            quam atque esse rerum ducimus molestiae fugit. Minus minima,
            voluptates labore perferendis natus sunt esse, error animi fuga,
            atque dolorem! Asperiores unde praesentium laborum aperiam a
            reprehenderit eligendi, dolorum fuga blanditiis omnis quis aut
            eveniet ipsam, deserunt repudiandae porro hic temporibus animi sequi
            velit quam iusto excepturi mollitia nemo! Earum. Neque obcaecati,
            est atque fugit enim sit commodi. Vel libero amet quod repudiandae
            nam voluptatibus quam. Exercitationem eius autem enim ex. Quos
            laboriosam tenetur dolores dolorum doloremque, esse asperiores aut!
            Mollitia, delectus obcaecati facilis qui tempore explicabo nobis
            accusantium ex! Sapiente voluptates, aliquam rem voluptatem nulla
            dicta? Hic commodi eaque nihil repellendus ex at, placeat in ad
            corporis? Quidem, ex? Quos esse at aliquid sed, enim alias sit
            perferendis culpa vel harum cum molestiae temporibus. At temporibus
            excepturi nesciunt odit dolorum ullam dolores itaque cupiditate
            doloribus! Non consequatur placeat consectetur. Doloremque autem hic
            totam, dolore, porro minima ducimus quis reiciendis molestiae culpa
            exercitationem facere ipsum laborum est sit at earum odio, possimus
            libero nesciunt officiis. Deleniti expedita eos sit autem.
          </Typography>
          <Typography lineHeight={"3rem"} variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            molestias magni porro, suscipit ea aperiam rem dolores asperiores
            excepturi quod, exercitationem quas placeat dolorum repudiandae,
            neque ipsam. Molestiae, temporibus ea? Laborum voluptatibus illo
            praesentium fugiat id magnam provident veniam placeat, minus ex
            quisquam dignissimos eum dolorum saepe libero cumque illum sequi
            sint recusandae architecto similique nulla. Ex iste perspiciatis
            exercitationem? Ratione quisquam tempora alias inventore unde iusto
            quis provident recusandae reiciendis nihil? Alias aliquam qui neque
            quisquam fuga incidunt ipsam repudiandae id inventore? Repellat nemo
            est officia, amet illum modi. Libero similique itaque, temporibus
            nihil rem, perferendis eos necessitatibus, dolorem porro quisquam
            cumque nostrum corporis odit voluptatibus tempore culpa? Ratione
            expedita odit nisi reprehenderit autem soluta, quidem obcaecati rem
            recusandae. Sapiente animi, porro corrupti soluta maxime
            consequuntur, earum eaque illum placeat sint, temporibus laudantium?
            Minima, optio architecto? Iure corporis minus delectus ad
            architecto! Praesentium, blanditiis voluptatum quae maiores harum
            cupiditate.
          </Typography>
        </Box>
        <Box textAlign={"center"} p={"1rem"}>
          <Button
            sx={{
              width: "65%",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
            onClick={FinishCourse}
          >
            <Typography variant="h4" fontWeight={"bold"}>Finish Course</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseStudy;

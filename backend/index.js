import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

//routes
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/course.js";
//data for testing
import courses from "./data/courses.js";
//models for testing
import Course from "./models/Courses.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true })); // incoming data is parsed. Maximum limit is 30mb. Extended implies we can use nested objects such as nested arrays and nested objects.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Route Configurations
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 6000;
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is runing on port number ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 2,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    details: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);


const Course=mongoose.model("Course",CourseSchema);
export default Course;

import { json } from "express";
import Course from "../models/Courses.js";
import User from "../models/Users.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findOne({ id: courseId });
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getMyCourses = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    const userCourseskeys = [...user.coursesRegistered.keys()];

    const userCourses = await Promise.all(
      userCourseskeys.map(async (key) => {
        const course = await Course.findById(key);
        return course;
      })
    );
    

    res.status(200).json(userCourses);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const registerCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { userId } = req.body;
    const user = await User.findById(userId);

    const isRegistered = user.coursesRegistered.get(courseId);

    if (!isRegistered) {
      user.coursesRegistered.set(courseId, true);
    } else user.coursesRegistered.delete(courseId);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { coursesRegistered: user.coursesRegistered },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

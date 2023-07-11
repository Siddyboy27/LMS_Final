import express from 'express'
import { finishCourse, getAllCourses, getCompletedCourses, getCourse, getMyCourses, getSearchRes, registerCourse } from '../controllers/course.js';

const router=express.Router();

router.get("/allCourses",getAllCourses)
router.get("/:courseId",getCourse)
router.get("/mycourses/:id",getMyCourses)
router.get("/mycourses/completed/:id",getCompletedCourses)
router.get("/search/:searchQuery",getSearchRes)

router.patch("/registerCourse/:courseId",registerCourse);
router.patch("/finish/:courseId",finishCourse)
export default router;

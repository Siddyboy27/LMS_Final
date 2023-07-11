import express from 'express'
import { getAllCourses, getCourse, getMyCourses, registerCourse } from '../controllers/course.js';

const router=express.Router();

router.get("/allCourses",getAllCourses)
router.get("/:courseId",getCourse)
router.get("/mycourses/:id",getMyCourses)


router.patch("/registerCourse/:courseId",registerCourse);

export default router;

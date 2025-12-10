import express from 'express';
const router = express.Router();
import {getstudents , addstudents} from "../controllers/stucontrollers.js";

router.get("/get-stu", getstudents);
router.post("/add-user",addstudents);
export default router;
import express from 'express'
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent)
router.get('/', StudentControllers.getStudents)
router.get('/get-student/:studentId', StudentControllers.getStudent)

export const StudentRoutes = router;
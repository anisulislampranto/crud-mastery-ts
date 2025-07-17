import express from 'express'
import { StudentControllers } from './user.controller';

const router = express.Router();

router.post('/', StudentControllers.createUser)
router.get('/', StudentControllers.getAllUsers)


export const UserRoutes = router;
import express from 'express'
import { StudentControllers } from './user.controller';

const router = express.Router();

router.post('/', StudentControllers.createUser)


export const UserRoutes = router;
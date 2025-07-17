import express from 'express'
import { StudentControllers } from './user.controller';

const router = express.Router();

router.post('/', StudentControllers.createUser)
router.get('/', StudentControllers.getAllUsers)
router.get('/:userId', StudentControllers.getUser)
router.delete('/:userId', StudentControllers.deleteUser)


export const UserRoutes = router;
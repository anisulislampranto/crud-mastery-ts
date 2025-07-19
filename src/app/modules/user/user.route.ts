import express from 'express'
import { StudentControllers } from './user.controller';

const router = express.Router();

router.post('/', StudentControllers.createUser)
router.get('/', StudentControllers.getAllUsers)
router.get('/:userId', StudentControllers.getUser)
router.put('/:userId', StudentControllers.updateUser)
router.delete('/:userId', StudentControllers.deleteUser)

// order
router.put('/:userId/orders', StudentControllers.createOrder)
router.get('/:userId/orders', StudentControllers.getUserOrders)



export const UserRoutes = router;
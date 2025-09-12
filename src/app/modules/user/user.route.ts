import express from 'express'
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser)
router.get('/', UserControllers.getAllUsers)
router.get('/:userId', UserControllers.getUser)
router.put('/:userId', UserControllers.updateUser)
router.delete('/:userId', UserControllers.deleteUser)

// order
router.put('/:userId/orders', UserControllers.createOrder)
router.get('/:userId/orders', UserControllers.getUserOrders)
router.get('/:userId/total-price', UserControllers.gerOrdersTotalPriceOfUser)



export const UserRoutes = router;
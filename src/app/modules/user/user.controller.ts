import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { User } from "../user.model";

const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const user = new User()
        if (await user.isUserExist(userData.email)) {
            throw new Error('User Already exist')
        }

        const createdUser = await UserServices.createUserIntoDB(userData)
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: createdUser
        })
    } catch (error: any) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to create user!',
        })
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserServices.getUsersFromDB()
        res.status(200).json({
            success: true,
            message: 'Fetched all users!',
            data: users
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to get users!',
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const user = new User();
        if (await user.isUserExist(user.email)) {
            const userInfo = await UserServices.getUserFromDB(userId)
            res.status(200).json({
                success: true,
                message: 'User fetched successfully!',
                data: userInfo
            })
        } else {
            throw new Error(`User Doesn't exist!`)
        }
        
    } catch (error) {
        console.log('error', error)
        res.status(403).json({
            success: false,
            message: 'Failed to get user!',
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const user = new User();
        if (!await user.isUserExist(user.email)) {
            throw new Error(`User Doesn't exist!`)
        }
        const updatedUser = await UserServices.updateUserFromDB(userId, userData)
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        })
    } catch (error) {
        console.log('error', error)
        res.status(403).json({
            success: false,
            message: error,
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        await UserServices.deleteUserFromDB(userId)
        res.status(200).json({
            success: true,
            message: 'User deleted successfully!',
            data: null
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to delete users!',
        })
    }
}

// create order
const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        await UserServices.createUserOrderOnDB(userId, req.body)

        res.status(200).json({
            success: true,
            message: 'Order Created Successfully!',
            data: null
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to create order!',
        })
    }
}

const getUserOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const orders = await UserServices.getUserOrdersFromDB(userId)

        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to get user orders!',
        })
    }
}

const gerOrdersTotalPriceOfUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const totalPrice = await UserServices.gerOrdersTotalPriceOfUserFromDB(userId)

        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully',
            data: totalPrice
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to get user orders!',
        })
    }
}

export const StudentControllers = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    createOrder,
    getUserOrders,
    gerOrdersTotalPriceOfUser
}
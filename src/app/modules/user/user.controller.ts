import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const createdUser = await UserServices.createUserIntoDB(user)
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: createdUser
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to create user!',
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
        const user = await UserServices.getUserFromDB(userId)
        res.status(200).json({
            success: true,
            message: 'Fetched User!',
            data: user
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to get users!',
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        await UserServices.deleteUserFromDB(userId)
        res.status(200).json({
            success: true,
            message: 'Deleted User!',
        })
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to delete users!',
        })
    }
}

export const StudentControllers = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser
}
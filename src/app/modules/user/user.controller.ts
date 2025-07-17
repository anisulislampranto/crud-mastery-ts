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
        console.log(error);
    }
}

export const StudentControllers = {
    createUser
}
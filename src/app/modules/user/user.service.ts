import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDB = async (user: User) => {
    const createdUser = await UserModel.create(user)
    return createdUser
}

const getUsersFromDB = async () => {
    const users = await UserModel.find()
    return users
}

export const UserServices = {
    createUserIntoDB,
    getUsersFromDB
}
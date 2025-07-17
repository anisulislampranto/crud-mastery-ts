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

const getUserFromDB = async (userId: string) => {
    const user = await UserModel.findOne({ _id: userId })
    return user
}

const deleteUserFromDB = async (userId: string) => {
    const user = await UserModel.deleteOne({ _id: userId })
    return user
}

export const UserServices = {
    createUserIntoDB,
    getUsersFromDB,
    getUserFromDB,
    deleteUserFromDB
}
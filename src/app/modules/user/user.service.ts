import { UserModel } from "../user.model";
import { Order, User } from "./user.interface";

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

const updateUserFromDB = async (userId: string, userData: User) => {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {new: true})
    return updatedUser
}

const deleteUserFromDB = async (userId: string) => {
    const user = await UserModel.deleteOne({ _id: userId })
    return user
}

const createUserOrderOnDB = async (userId: string, data: Order) => {
    const createdOrder = await UserModel.updateOne({ _id: userId }, {$addToSet: {orders: data}})
    return createdOrder
}

export const UserServices = {
    createUserIntoDB,
    getUsersFromDB,
    getUserFromDB,
    deleteUserFromDB,
    updateUserFromDB,
    createUserOrderOnDB
}
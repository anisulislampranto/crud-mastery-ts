import mongoose from "mongoose";
import { User } from "../user.model";
import { TOrder, TUser } from "./user.interface";

const createUserIntoDB = async (userData: TUser) => {
    if (await User.isUserExist(userData.userId)) {
        throw new Error('User Already exist')
    }
    const createdUser = await User.create(userData);
    return createdUser
}

const getUsersFromDB = async () => {
    const users = await User.aggregate([
        {
            $project: { _id: 0, username: 1, fullName: 1, age: 1, email: 1, address: 1 }
        }
    ])
    return users
}

const getUserFromDB = async (userId: number) => {
    const user = await User.aggregate([
        {
            $match: { userId }
        },
        {
            $project: { _id: 0, password: 0 }
        }
    ])
    return user
}

const updateUserFromDB = async (userId: string, userData: TUser) => {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true })
    return updatedUser
}

const deleteUserFromDB = async (userId: string) => {
    const user = await User.deleteOne({ _id: userId })
    return user
}

const createUserOrderOnDB = async (userId: string, data: TOrder) => {
    const createdOrder = await User.updateOne({ _id: userId }, { $addToSet: { orders: data } })
    return createdOrder
}

const getUserOrdersFromDB = async (userId: string) => {
    const userOrders = await User.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(userId) }
        },
        {
            $project: { _id: 0, orders: 1 }
        }
    ])
    return userOrders[0]
}

const gerOrdersTotalPriceOfUserFromDB = async (userId: string) => {
    const totalPrice = await User.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(userId) }
        },
        {
            $unwind: "$orders"
        },
        {
            $group: { _id: null, totalPrice: { $sum: "$orders.price" } }
        },
        {
            $project: { _id: 0, totalPrice: 1 }
        }
    ])
    return totalPrice
}

export const UserServices = {
    createUserIntoDB,
    getUsersFromDB,
    getUserFromDB,
    deleteUserFromDB,
    updateUserFromDB,
    createUserOrderOnDB,
    getUserOrdersFromDB,
    gerOrdersTotalPriceOfUserFromDB
}
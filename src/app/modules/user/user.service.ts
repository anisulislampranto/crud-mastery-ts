import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDB = async (user: User) => {
    const createdUser = await UserModel.create(user)
    return createdUser
}

export const UserServices = {
    createUserIntoDB
}
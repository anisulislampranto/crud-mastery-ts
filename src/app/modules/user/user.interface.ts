import { Model } from "mongoose";

export type TFullName = {
    firstName: string;
    lastName: string;
}

export type TAddress = {
    street: string;
    city: string;
    country: string;
}

export type TOrder = {
    productName: string;
    price: number;
    quantity: number;
}

export type TUser = {
    userId: number;
    username: String;
    password: string;
    fullName: TFullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies?: [string];
    address?: TAddress;
    orders?: [TOrder]
}

export interface UserModel extends Model<TUser> {
    isUserExist(id: number): Promise<TUser | null >
}
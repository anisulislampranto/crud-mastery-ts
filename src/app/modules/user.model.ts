import { Schema, model, connect } from 'mongoose';
import { Address, fullName, Order, User, } from './user/user.interface'

const fullNameSchema = new Schema<fullName>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const addressSchema = new Schema<Address>({
    street: { type: String },
    city: { type: String },
    country: { type: String }
})

const orderSchema = new Schema<Order>({
    productName: String,
    price: Number,
    quantity: Number
})

const userSchema = new Schema<User>({
    userId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    fullName: fullNameSchema,
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    hobbies: [
        String
    ],
    address: addressSchema,
    orders: [orderSchema]
});

export const UserModel = model<User>("User", userSchema)
import { Schema, model, connect } from 'mongoose';
import { TAddress, TFullName, TOrder, TUser, UserMethod, UserModel} from './user/user.interface'

const fullNameSchema = new Schema<TFullName>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const addressSchema = new Schema<TAddress>({
    street: { type: String },
    city: { type: String },
    country: { type: String }
})

const orderSchema = new Schema<TOrder>({
    productName: String,
    price: Number,
    quantity: Number
})

const userSchema = new Schema<TUser, UserModel, UserMethod>({
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

userSchema.statics.isUserExist = async function(identifier: string) {
    const existingUser = await User.findOne({
        $or: [
            { _id: identifier },
            { email: identifier }
        ]
    });
    return existingUser;
};


export const User = model<TUser, UserModel>("User", userSchema)
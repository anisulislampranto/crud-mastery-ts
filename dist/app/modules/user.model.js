"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const fullNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
});
const addressSchema = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    country: { type: String }
});
const orderSchema = new mongoose_1.Schema({
    productName: String,
    price: Number,
    quantity: Number
});
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
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
// create custom static method
userSchema.statics.isUserExist = function name(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = exports.User.findOne({ userId });
        return user;
    });
};
exports.User = (0, mongoose_1.model)("User", userSchema);

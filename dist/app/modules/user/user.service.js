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
exports.UserServices = void 0;
const user_model_1 = require("../user.model");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExist(userData.userId)) {
        throw new Error('User Already exist');
    }
    const createdUser = yield user_model_1.User.create(userData);
    return createdUser;
});
const getUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.aggregate([
        {
            $project: { _id: 0, username: 1, fullName: 1, age: 1, email: 1, address: 1 }
        }
    ]);
    return users;
});
const getUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const user = yield user_model_1.User.aggregate([
        {
            $match: { userId }
        },
        {
            $project: { _id: 0, password: 0 }
        }
    ]);
    return user;
});
const updateUserFromDB = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const updatedUser = user_model_1.User.findOneAndUpdate({ userId: userId }, userData, { new: true }).select('-password');
    return updatedUser;
});
const deleteUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const user = yield user_model_1.User.deleteOne({ userId });
    return user;
});
const createUserOrderOnDB = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const createdOrder = yield user_model_1.User.updateOne({ userId }, { $addToSet: { orders: data } });
    return createdOrder;
});
const getUserOrdersFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const userOrders = yield user_model_1.User.aggregate([
        {
            $match: { userId }
        },
        {
            $project: { _id: 0, orders: 1 }
        }
    ]);
    return userOrders[0];
});
const gerOrdersTotalPriceOfUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_model_1.User.isUserExist(userId))) {
        throw new Error(`User Doesn't exist`);
    }
    const totalPrice = yield user_model_1.User.aggregate([
        {
            $match: { userId }
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
    ]);
    return totalPrice;
});
exports.UserServices = {
    createUserIntoDB,
    getUsersFromDB,
    getUserFromDB,
    deleteUserFromDB,
    updateUserFromDB,
    createUserOrderOnDB,
    getUserOrdersFromDB,
    gerOrdersTotalPriceOfUserFromDB
};

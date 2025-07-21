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
exports.StudentControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const createdUser = yield user_service_1.UserServices.createUserIntoDB(userData);
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: createdUser
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to create user!',
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.UserServices.getUsersFromDB();
        res.status(200).json({
            success: true,
            message: 'Fetched all users!',
            data: users
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: 'Failed to get users!',
        });
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userInfo = yield user_service_1.UserServices.getUserFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'User fetched successfully!',
            data: userInfo
        });
    }
    catch (error) {
        console.log('error', error);
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to get user!',
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const updatedUser = yield user_service_1.UserServices.updateUserFromDB(Number(userId), userData);
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        console.log('error', error);
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to update user',
        });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield user_service_1.UserServices.deleteUserFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'User deleted successfully!',
            data: null
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to delete users!',
        });
    }
});
// create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield user_service_1.UserServices.createUserOrderOnDB(Number(userId), req.body);
        res.status(200).json({
            success: true,
            message: 'Order Created Successfully!',
            data: null
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to create order!',
        });
    }
});
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const orders = yield user_service_1.UserServices.getUserOrdersFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to get user orders!',
        });
    }
});
const gerOrdersTotalPriceOfUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const totalPrice = yield user_service_1.UserServices.gerOrdersTotalPriceOfUserFromDB(Number(userId));
        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully',
            data: totalPrice
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: error.message || 'Failed to get user orders!',
        });
    }
});
exports.StudentControllers = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    createOrder,
    getUserOrders,
    gerOrdersTotalPriceOfUser
};

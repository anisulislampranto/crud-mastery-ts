"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.StudentControllers.createUser);
router.get('/', user_controller_1.StudentControllers.getAllUsers);
router.get('/:userId', user_controller_1.StudentControllers.getUser);
router.put('/:userId', user_controller_1.StudentControllers.updateUser);
router.delete('/:userId', user_controller_1.StudentControllers.deleteUser);
// order
router.put('/:userId/orders', user_controller_1.StudentControllers.createOrder);
router.get('/:userId/orders', user_controller_1.StudentControllers.getUserOrders);
router.get('/:userId/total-price', user_controller_1.StudentControllers.gerOrdersTotalPriceOfUser);
exports.UserRoutes = router;

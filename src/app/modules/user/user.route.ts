import express from 'express'
import { StudentControllers } from './user.controller';

const router = express.Router();

router.post('/users', StudentControllers.createUser)
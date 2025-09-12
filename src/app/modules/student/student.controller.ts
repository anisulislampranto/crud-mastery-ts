import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    const { student: studentData } = req.body;

    try {
        const result = await StudentServices.createStudentIntoDB(studentData)

        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB()

        res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getStudent = async (req: Request, res: Response) => {
    const { studentId } = req.params;

    try {
        const result = await StudentServices.getStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student retrieved successfully',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const StudentControllers = {
    createStudent,
    getStudents,
    getStudent
}
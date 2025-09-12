import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
    const createdStudent = await Student.create(student)
    return createdStudent;
}

const getAllStudentsFromDB = async () => {
    const students = await Student.find();
    return students;
}

const getStudentFromDB = async (id: string) => {
    const student = await Student.findOne({ id });
    return student;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getStudentFromDB
}
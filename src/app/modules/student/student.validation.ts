import { z } from "zod";

// UserName Zod Schema
const userNameZodSchema = z.object({
    firstName: z
        .string()
        .max(20, "First Name cannot be more than 20 characters")
        .nonempty("first name is required")
        .trim()
        .refine(
            (val) => val.charAt(0).toUpperCase() + val.slice(1) === val, { message: "First name must be capitalized" }
        ),
    middleName: z.string().trim().optional(),
    lastName: z.string().nonempty("last name is required").trim(),
});

const guardianZodSchema = z.object({
    fatherName: z.string().nonempty("Father name is required"),
    fatherOccupation: z.string().nonempty("Father occupation is required"),
    fatherContactNo: z.string().nonempty("Father contact number is required"),
    motherName: z.string().nonempty("Mother name is required"),
    motherOccupation: z.string().nonempty("Mother occupation is required"),
    motherContactNo: z.string().nonempty("Mother contact number is required"),
});

const localGuardianZodSchema = z.object({
    name: z.string().nonempty("Local guardian name is required"),
    occupation: z.string().nonempty("Local guardian occupation is required"),
    contactNo: z.string().nonempty("Local guardian contact number is required"),
    address: z.string().nonempty("Local guardian address is required"),
});

export const studentZodValidationSchema = z.object({
    id: z.string().nonempty("ID is required"),
    name: userNameZodSchema,
    email: z.email("Invalid email format"),
    avatar: z.url("Invalid avatar URL").optional(),
    gender: z.enum(["male", "female", "other"]),
    dateOfBirth: z.string().nonempty("Date of birth is required"),
    contactNumber: z.string().nonempty("Contact number is required"),
    emergencyContactNo: z.string().nonempty("Emergency contact number is required"),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]).optional(),
    presentAddress: z.string().nonempty("Present address is required"),
    permanentAddress: z.string().nonempty("Permanent address is required"),
    guardian: guardianZodSchema,
    LocalGuardian: localGuardianZodSchema,
    profileImage: z.url("Invalid profile image URL").optional(),
    isActive: z.enum(["active", "inactive"]).default("active"),
});

export default studentZodValidationSchema;
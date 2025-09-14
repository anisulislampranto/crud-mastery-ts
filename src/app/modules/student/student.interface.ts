
export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
}

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type TStudent = {
    id: string;
    name: TUserName;
    email: string;
    avatar?: string;
    gender: "male" | "female" | 'other';
    dateOfBirth: string;
    contactNumber: string;
    emergencyContactNo: string;
    bloodGroup?: 'A+' | "A-" | 'B+' | 'B-' | 'O+' | "O-" | 'AB+' | 'AB-';
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    LocalGuardian: TLocalGuardian;
    profileImage?: string;
    isActive: "active" | "inactive";
}
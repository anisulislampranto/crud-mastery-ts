import Joi from 'joi';

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
        .required()
        .max(20)
        .trim()
        .custom((value, helpers) => {
            const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
            if (capitalized !== value) {
                return helpers.error('any.custom', { message: `${value} is not capitalized` });
            }
            return value;
        }, 'Capitalization validation')
        .messages({
            'any.required': 'first name is required',
            'string.max': 'First Name cannot be more than 20 characters',
            'any.custom': '{#label} is not capitalized'
        }),
    middleName: Joi.string().trim().allow(''),
    lastName: Joi.string()
        .required()
        .trim()
        .messages({
            'any.required': 'last name is required'
        })
});

const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required()
});

const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required()
});

const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    email: Joi.string().email().required(),
    avatar: Joi.string().uri().allow(''),
    gender: Joi.string().valid('male', 'female', 'other').required()
        .messages({
            'any.only': '{#value} is not valid gender'
        }),
    dateOfBirth: Joi.string().required(),
    contactNumber: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-').allow(''),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    LocalGuardian: localGuardianValidationSchema.required(),
    profileImage: Joi.string().uri().allow(''),
    isActive: Joi.string().valid('active', 'inactive').default('active')
});


export default studentValidationSchema;
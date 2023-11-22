import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    // name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
    // email: Yup.string().email().required("Please Enter Your Email"),
    // password: Yup.string().min(6).required("Please Enter Your Password"),
    // phonenumber: Yup.number().integer("Phone Number must be an integer")
    //     .test('len', 'Phone Number must be exactly 10 digits', val => val && val.toString().length === 10)
    //     .required("Please Enter Your Phone Number")

    name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
        .min(2, "Name must have at least 2 characters")
        .max(25, "Name can't be longer than 25 characters")
        .required("Please Enter Your Name"),

    email: Yup.string()
        .matches(/^[\w\.-]+@[\w\.-]+\.\w+$/, "Invalid Email Address")
        .required("Please Enter Your Email"),

    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
            , "Password must be at least 6 characters, contain one lowercase, one uppercase letter and one number")
        .required("Please Enter Your Password"),

    phonenumber: Yup.number()
        .integer("Phone Number must be an integer")
        .test('len', 'Phone Number must be exactly 10 digits', val => val && val.toString().length === 10)
        .required("Please Enter Your Phone Number")
        .test('phone', 'Invalid Phone Number', val => /^[0-9]{10}$/.test(val))
});
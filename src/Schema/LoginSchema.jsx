import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email: Yup.string()
        .matches(/^[\w\.-]+@[\w\.-]+\.\w+$/, "Invalid Email Address")
        .required("Please Enter Your Email"),

    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
            , "Password must be at least 6 characters, contain one lowercase, one uppercase letter and one number")
        .required("Please Enter Your Password"),

})
import React from 'react';
import LoginBookImage from '../assests/open-humanized-cartoon-book-character-eps-vectors_csp48198830.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchema } from '../Schema/LoginSchema';

const Login = () => {

    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: ''
    }
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
            navigate('/home')
        }
    })

    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="img-container">
                        <img src={LoginBookImage} className='img-fluid' alt="Hand holding book" />
                    </div>
                </div>
                <div className="col-md-6 shadow p-5">
                    <div className='mb-5 text-center'>
                        <h1>Login Now</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" className="form-control" name='email' placeholder='Please Enter Your Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.email}
                            </div>) : null}
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" name='password' placeholder='Please Enter Your PassWord' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.password}
                            </div>) : null}
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Submit</button>
                    </form>
                    <p className="mt-3 text-center">Don't have an account? <Link to="/sign-up">Sign Up Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
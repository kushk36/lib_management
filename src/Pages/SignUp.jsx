import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bookReadImage from '../assests/3255474.jpg'
import { useFormik } from 'formik';
import { signUpSchema } from '../Schema/Schema';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const initialValues = {
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    }

    const navigate = useNavigate()

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            navigate('/log-in')
            action.resetForm()
        }
    })

    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="img-container">
                        <img src={bookReadImage} className='img-fluid' alt="Human Read Book" />
                    </div>
                </div>
                <div className="col-md-6 shadow-md p-5">
                    <div className="mb-5">
                        <h2>Sign Up Now</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* <label htmlFor="name" className="form-label">Name</label> */}
                            <input type="text" className="form-control" name='name' id="name" placeholder='Enter Your Name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.name}
                            </div>) : null}
                            {/* {<p className='alerts'>{errors.name}</p>} */}
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="email" className="form-label">Email address</label> */}
                            <input type="email" className="form-control" name='email' placeholder='Enter Your Email' id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.email}
                            </div>) : null}
                            {/* {<p className='alerts'>{errors.email}</p>} */}
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="password" className="form-label" >Password</label> */}
                            <input type="password" className="form-control" name='password' placeholder='Enter Your Password' id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {/* {<p className='alerts'>{errors.password}</p>} */}
                            {errors.password && touched.password ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.password}
                            </div>) : null}
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="phoneNumber" className='form-label'>Phone Number</label> */}
                            <input
                                type="number"
                                className="form-control"
                                name='phonenumber'
                                id="phoneNumber"
                                placeholder="Enter phone number"
                                maxLength="10"
                                value={values.phonenumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* {<p className='alerts'>{errors.phonenumber}</p>} */}
                            {errors.phonenumber && touched.phonenumber ? (<div className="mt-2 alert alert-danger" role="alert">
                                {errors.phonenumber}
                            </div>) : null}
                        </div>
                        <button type='submit' className="btn btn-danger w-100">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp; 
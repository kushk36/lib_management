import React, { useState } from 'react';
import openBookImage from '../assests/book-3033196_640.jpg'
import { useFormik } from 'formik';
import BookSchema from '../Schema/AddBookSchema';

const AddBook = () => {

    const [imageError, setImageError] = useState(false)
    const [image, setImage] = useState(null)

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type) {
            setImage(selectedFile)
            setImageError(false)
        } else {
            setImage(null)
            setImageError(true)
        }
    }


    const initialValues = {
        name: '',
        category: '',
        author: ''
    }

    const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: BookSchema,
        onSubmit: (values, action) => {

            if (!image) {
                setImageError(true);
                return;
            }
            console.log(values);
            action.resetForm()
        }
    })
    return (
        <div className="col shadow-lg justify-content-center align-items-center" style={{ background: "#F1F0EF", width: "450px", height: "555px", margin: "3.5rem 10rem" }}>
            <div className="text-center">
                <div className="img-container d-flex justify-content-center align-items-center mx-auto" style={{ width: "150px", height: "150px" }}>
                    <img src={openBookImage} className='img-fluid' alt="Human Read Book" />
                </div>
                <h3 className='mt-4'>Enter Book Details Now...</h3>
                <form className='p-3 mx-auto text-center' onSubmit={handleSubmit}>
                    <div className="mb-3 input-container">
                        <input className="form-control" type="file" id="image" onChange={handleImageChange} accept='image/*"' />
                        {imageError ? (<p className='text-danger'>please upload the image</p>) : null}
                    </div>
                    <div className="mb-3 input-container">
                        <input type="text" className="form-control custom-input" id="exampleInputEmail1" placeholder='Enter Book Name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                        {touched.name && errors.name ? (<p className='text-danger'>please write the book name</p>) : null}
                    </div>
                    <div className="mb-3 input-container">
                        <input type="text" className="form-control custom-input" id="exampleInputEmail1" placeholder='Enter Book Category' name='category' value={values.category} onChange={handleChange} onBlur={handleBlur} />
                        {touched.category && errors.category ? (<p className='text-danger'>please write the category name</p>) : null}
                    </div>
                    <div className="mb-3 input-container">
                        <input type="text" className="form-control custom-input" id="exampleInputEmail1" placeholder='Enter Book Author' name='author' value={values.author} onChange={handleChange} onBlur={handleBlur} />
                        {touched.author && errors.author ? (<p className='text-danger'>please write the author name</p>) : null}
                    </div>
                    <div className="mb-3 input-container">
                        <textarea type="" className="form-control custom-input" id="exampleInputEmail1" placeholder='Enter Book Description' name='author' value={values.author} onChange={handleChange} onBlur={handleBlur} />
                        {touched.author && errors.author ? (<p className='text-danger'>please write the author name</p>) : null}
                    </div>
                    <button type="submit" className="btn btn-danger input-container">Add Book</button>
                </form>
            </div>
        </div>

    );
};

export default AddBook;
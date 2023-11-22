import * as Yup from 'yup';

export const BookSchema = Yup.object({
    name: Yup.string().required('Book name is required'),
    category: Yup.string().required('Book Category is required'),
    author: Yup.string().required('Book Author Name is required')
})

export default BookSchema;
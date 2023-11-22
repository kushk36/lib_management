import React, { useContext, useEffect } from 'react';
import { getBooks } from '../Context/BookAction';
import { BookContext } from '../Context/BookContext';

const IssueBook = () => {

    const { books, dispatch } = useContext(BookContext)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks();
                dispatch({ type: 'GET_BOOKS', payload: booksData })
            } catch (error) {
                console.error('Error Fetching books', error);
            }
        }
        fetchBooks()

    }, [dispatch])

    // { console.log(books) }

    return (
        <div className='col mt-md-3 p-md-5'>
            <div className='text-center'>
                <h1>All Issued Books</h1>
            </div>
            <table className='tablee mt-md-3' style={{ border: "3px solid #aaaaaa" }}>
                <thead style={{ background: "#e0dfde" }}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Issue Date</th>
                        <th scope="col">Returned Date</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        const backgroundColor = book.id % 2 === 0 ? '#E0DFDE' : '#fff';
                        console.log(`Book ID: ${book.id}, Background Color: ${backgroundColor}`);
                        return (

                            <tr key={book.id} style={{ background: backgroundColor }}>
                                <td scope='row'>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.category}</td>
                                <td>{book.issueDate}</td>
                                <td>{book.returnDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default IssueBook; 
import React, { useContext, useEffect, useState } from 'react';
import { getBooks } from '../Context/BookAction';
import { BookContext } from '../Context/BookContext';
import { useParams } from 'react-router-dom';
import Popup from './Popup';
import '../Css/Popup.css';
import { Button } from 'react-bootstrap';


const ViewBook = () => {

    const { books, dispatch } = useContext(BookContext)
    const { bookId } = useParams()
    const bookid = +bookId
    const [isPopupOpen, setPopupOpen] = useState(false)



    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await getBooks()
                dispatch({ type: 'GET_BOOKS', payload: bookData })
            } catch (error) {
                console.log('Error Fetching Books', error)
            }
        }
        fetchBook()
    }, [dispatch])

    // console.log(books);
    const selectedBook = books.find(book => book.id === bookid)
    // console.log(selectedBook);
    const handleCloseModal = () => {
        setPopupOpen(false)
    }

    if (!selectedBook) {
        return <p className='col'>Book not found.</p>;
    }

    return (
        <div className='col d-flex mt-md-3 p-md-5' style={{ gap: "4rem" }}>
            <div>
                <div className="img-container" style={{ height: "400px", width: "300px" }}>
                    <img src={selectedBook.image} className='img-fluid' alt="BOOK" />
                    <h4 className='text-center mt-3'>{selectedBook.title}</h4>
                    <div className="text-center"><span style={{ color: "gray" }}>{selectedBook.author}</span></div>
                </div>

            </div>
            <div>
                <div className='text-start mt-2'>
                    <h5>Category : {selectedBook.category}</h5>
                </div>
                <div className='text-start'>
                    <h5>Issued : {selectedBook.isIssued}</h5>
                </div>
                <div className="text-start mb-3">
                    <h5 style={{ display: "inline-block", marginRight: "5px", margin: 0 }}>Description :</h5>
                    <p style={{ display: "inline-block", margin: 0 }}>{selectedBook.description}</p>
                </div>

                {/* <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setPopupOpen(true) }}>
                    Issue This Book Now
                </button> */}

                <Button variant="primary" onClick={() => { setPopupOpen(true) }}>
                    Open Modal
                </Button>

            </div>
            {isPopupOpen && <Popup onHide={handleCloseModal} />}
        </div>
    );
};

export default ViewBook;
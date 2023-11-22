// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link, useNavigate } from 'react-router-dom';
// import ViewBook from './ViewBook';
// const Home = () => {

//     const [books, setBooks] = useState([])
//     const [searchResults, setSearchResults] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         const fetchBooks = async () => {
//             const response = await fetch('/Book.json', {
//                 mode: 'no-cors'
//             });
//             const data = await response.json()
//             setBooks(data)
//             console.log(data)
//         }
//         fetchBooks()
//     }, [])

//     const bookDescription = (book) => {
//         console.log(book);
//         navigate(`/${book.id}/${encodeURIComponent(book.title)}`)

//     }

//     const handleSearchInputChange = (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const filterResults = books.filter((book) =>
//             book.title.toLowerCase().includes(searchTerm)
//         )
//         setSearchResults(filterResults)
//     }

//     const renderBookCards = (bookArray) => {
//         const bookRows = [];
//         for (let i = 0; i < bookArray.length; i += 4) {
//             const rowBooks = bookArray.slice(i, i + 4);
//             const row = (
//                 <div key={i} className="row p-2">
//                     {rowBooks.map((book) => (
//                         <div key={book.author} className="col-md-3 mb-4" onClick={() => bookDescription(book)}>
//                             <div className="card shadow-lg border-0">
//                                 <div className="img-container mx-auto p-3" style={{ width: "170px", height: "170px" }}>
//                                     <img src={book.image} className='img-fluid' alt="Human Read Book" />
//                                 </div>
//                                 <div className="card-body mt-5 text-center">
//                                     <h5 className="card-title">{book.title}</h5>
//                                     <p className="card-text">{book.author}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             );
//             bookRows.push(row);
//         }
//         return bookRows;
//     };


//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="bg-dark col-auto col-md-2 min-vh-100">
//                     <div className='mt-3 mb-3'>
//                         <Link to="/home" className="text-decoration-none text-white d-sm-inline d-flex align-itemcenter mb-4 mb-sm-5 fs-5">
//                             <i className="bi bi-book"></i>
//                             <span className="ms-3 fs-4 d-none d-sm-inline">Elonsel</span>
//                         </Link>
//                     </div>
//                     <hr className='text-secondary d-none d-sm-inline' />
//                     <ul className="nav nav-pills flex-column">
//                         <li className="nav-item text-white fs-4 mb-3">
//                             <Link to="/home" className="nav-link  text-white fs-5" aria-current="page">
//                                 <i className="bi bi-house"></i>
//                                 <span className="ms-3 d-none d-sm-inline">Home</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item text-white fs-4 mb-3">
//                             <Link to="/add-book" className="nav-link  text-white fs-5" aria-current="page">
//                                 <i className="bi bi-cloud-plus"></i>
//                                 <span className="ms-3  d-none d-sm-inline">Create</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item text-white fs-4 mb-3">
//                             <Link to="/profile" className="nav-link  text-white fs-5" aria-current="page">
//                                 <i className="bi bi-person-circle"></i>
//                                 <span className="ms-3  d-none d-sm-inline">Profile</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item text-white fs-4 mb-3">
//                             <Link className="nav-link  text-white fs-5" aria-current="page">
//                                 <i className="bi bi-box-arrow-right"></i>
//                                 <span className="ms-3  d-none d-sm-inline">Logout</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col mt-2">
//                     <div className="mb-3 d-flex flex-nowrap justify-content-between">
//                         <input type="text" className="form-control me-3" placeholder='Enter Book Name..' onChange={handleSearchInputChange} />
//                         <button className="btn btn-danger" type="submit">Search</button>
//                     </div>
//                     {/* <div className="card shadow-lg border-0 p-5 mt-5" style={{ width: "18rem" }}> */}
//                     {/* <div className="img-container">
//                             <img src={books[0].image} className='img-fluid' alt="Human Read Book" />
//                         </div>
//                         <div className="card-body">
//                             <h5 className="card-title">{books[0].title}</h5>
//                             <p className="card-text">{books[0].author}</p>
//                         </div> */}
//                     {/* {books.map((book) => (

//                         <div key={book.author} className="card shadow-lg border-0 p-5 mt-5" style={{ width: "18rem" }}>
//                             <div className="img-container">
//                                 <img src={book.image} className='img-fluid' alt="Human Read Book" />
//                             </div>
//                             <div className="card-body">
//                                 <h5 className="card-title">{book.title}</h5>
//                                 <p className="card-text">{books.author}</p>
//                             </div>
//                         </div>
//                     ))} */}
//                     {searchResults.length > 0 ? renderBookCards(searchResults) : renderBookCards(books)}
//                     {/* {renderBookCards()} */}

//                 </div>
//             </div>
//         </div>

//     );
// }



// export default Home;


import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookRequest, getBooksSuccess } from '../redux/BookAction';

const Home = () => {
    // console.log(ali);
    // const [book, setBook] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { books, loading } = useSelector((state) => state.books)
    console.log(books);


    // useEffect(() => {
    //     const fetchBooks = async () => {
    //         const response = await fetch('/Book.json', {
    //             mode: 'no-cors'
    //         });
    //         const data = await response.json()
    //         console.log(data);
    //         setBook(data)
    //     }
    //     fetchBooks()
    // }, [])

    useEffect(() => {
        dispatch(getBookRequest())
    }, [dispatch])

    useEffect(() => {
        // Update localBooks when books from the store change
        setSearchResults(books);
    }, [books]);

    const bookDescription = (book) => {
        navigate(`/${book.id}/${encodeURIComponent(book.title)}`)

    }

    const handleSearchInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filterResults = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm)
        )
        setSearchResults(filterResults)
    }

    const renderBookCards = (bookArray) => {
        const bookRows = [];
        for (let i = 0; i < bookArray.length; i += 4) {
            const rowBooks = bookArray.slice(i, i + 4);
            const row = (
                <div key={i} className="row p-2">
                    {rowBooks.map((book) => (
                        <   div key={book.author} className="col-md-3 mb-4" onClick={() => bookDescription(book)}>
                            <div className="card shadow-lg border-0">
                                <div className="img-container mx-auto p-1" style={{ width: "170px", height: "250px" }}>
                                    <img src={book.image} className='img-fluid' alt="Human Read Book" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
            bookRows.push(row);
        }
        return bookRows;
    };


    return (
        <div className="col mt-2">

            <div className="mb-5 mt-4 d-flex flex-nowrap justify-content-between">
                <input type="text" className="form-control me-3" placeholder='Enter Book Name..' onChange={handleSearchInputChange} /> <button className="btn btn-danger" type="submit">Search</button>
            </div>
            {/* {searchResults.length > 0 ? renderBookCards(searchResults) : renderBookCards(books)} */}
            {loading ? <p>Loading...</p> : searchResults.length > 0 ? renderBookCards(searchResults) : <p>No results found</p>}
        </div>
    );
};

export default Home;

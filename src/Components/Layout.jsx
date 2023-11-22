// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

    const location = useLocation();

    const isLinkActive = (path) => {
        // Compare the current location with the link path
        return location.pathname === path;
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark col-auto col-md-2 min-vh-100">
                    <div className='mt-3 mb-3'>
                        <Link to="/home" className="text-decoration-none text-white d-sm-inline d-flex align-itemcenter mb-4 mb-sm-5 fs-5">
                            <i className="bi bi-book"></i>
                            <span className="ms-3 fs-4 d-none d-sm-inline">Elonsel</span>
                        </Link>
                    </div>
                    <hr className='text-secondary d-none d-sm-inline' />
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item text-white fs-4 mb-3">
                            <Link to="/home" className={`nav-link text-white fs-5 ${isLinkActive('/home') ? 'active' : ''}`} aria-current="page">
                                <i className="bi bi-house"></i>
                                <span className="ms-3 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4 mb-3">
                            <Link to="/add-book" className={`nav-link text-white fs-5 ${isLinkActive('/add-book') ? 'active' : ''}`} aria-current="page">
                                <i className="bi bi-cloud-plus"></i>
                                <span className="ms-3  d-none d-sm-inline">Create</span>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4 mb-3">
                            <Link to="/profile" className={`nav-link text-white fs-5 ${isLinkActive('/profile') ? 'active' : ''}`} aria-current="page">
                                <i className="bi bi-person-circle"></i>
                                <span className="ms-3  d-none d-sm-inline">Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4 mb-3">
                            <Link className="nav-link  text-white fs-5" aria-current="page">
                                <i className="bi bi-box-arrow-right"></i>
                                <span className="ms-3  d-none d-sm-inline">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Layout;

import React from 'react';
import BoyProfileImage from '../assests/istockphoto-513982980-612x612.jpg'
import GirlProfileImage from '../assests/istockphoto-665039932-2048x2048.jpg'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="col d-flex gap justify-content-center align-items-center gap-5 p-md-5" style={{ height: '100vh' }}>
            <Link className="col d-flex justify-content-center align-items-center rounded text-decoration-none" to='/nonReturnedBooks' style={{ background: "#ccd3ea", height: "350px", maxWidth: "500px" }}>
                <div className="text-center">
                    <img src={BoyProfileImage} alt="ProfileBoy" style={{ height: '100px' }} />
                    <h2 className='mt-5 text-dark'>Non Returned Books</h2>
                </div>

            </Link>
            <Link className="col d-flex justify-content-center align-items-center rounded text-decoration-none" to='/IssueBooks' style={{ background: "#f6afb4", height: "350px", maxWidth: "500px" }}>
                <div className="text-center">
                    <img src={GirlProfileImage} alt="ProfileGirl" style={{ height: '100px' }} />
                    <h2 className='mt-5 text-dark'>Issued Books</h2>
                </div>
            </Link>
        </div>

    );
};

export default Profile;
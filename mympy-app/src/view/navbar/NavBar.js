import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../components/search_bar/DreamSearchbar'

import logo from '../../img/logo.svg';


const NavBar = () => {
    return (
        <div className="main">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>

            <div className="right">
                <ul className="list">
                    <Searchbar/>    
                    <li className="item">
                        <Link to="/market">Search For Dreams</Link>
                    </li>
                   
                    <li className="item">
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li className="item sign-in">
                        <Link to="/login">Sign In</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
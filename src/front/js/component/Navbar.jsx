import React from "react";
import { Link } from "react-router-dom";
import FavoritesButton from "./FavoritesButton.jsx";


const Navbar =() => {
   
    return (
        
        <nav className="navbar navbar-light bg-dark container-fluid pb-3">

            <span className="navbar-brand">
                <Link to="/">
                    <img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" width="50" height="30" className="d-inline-block align-text-top"/>
                </Link>   
            </span>
            
            <FavoritesButton/>

        </nav>
    )
}

export default Navbar;
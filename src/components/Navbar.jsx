import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav id="navbar">
                <h2>
                    <Link to="/"><MdLocalMovies />FlixLib</Link>
                </h2>
                <form>
                    <input type="text" placeholder='Buscar' />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </>
    )
}

export default Navbar
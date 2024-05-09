import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";

function Navbar() {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <>
            <nav id="navbar">
                <h2>
                    <Link to="/"><MdLocalMovies />FlixLib</Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Buscar" onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </>
    )
}

export default Navbar
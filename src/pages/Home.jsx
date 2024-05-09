import React from 'react'
import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard';
import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    const getPopularMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopularMovies(data.results)
    }

    useEffect(() => {

        const popularURL = `${moviesURL}popular?${apiKey}`

        getPopularMovies(popularURL)
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>Filmes Populares</h2>
            <div className="movies-container">
                {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home
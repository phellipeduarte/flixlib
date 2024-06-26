import React from 'react'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search() {

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`

        getSearchedMovies(searchQueryURL)

    }, [query])

    return (
        <>
            <div className='container'>
                <h2 className='title'>Resultados para: <span className="query-text">"{query}"</span></h2>
                <div className="movies-container movies-container-grid">
                    {movies.length === 0 && <div className="loading"><p>Carregando...</p></div>}
                    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </>
    )
}

export default Search
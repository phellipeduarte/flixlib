import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import "./Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {

        const movieURL = `${moviesURL}${id}?${apiKey}&language=pt-BR`
        getMovie(movieURL)

    }, [])

    const formatDate = (date) => {
        date = new Date(Date.parse(date))
        return date.toLocaleString().substr(0, 10)
    }

    const getRuntimeString = (runtime) => {

        var hours = Math.floor(runtime / 60);
        var minutes = runtime % 60

        return `${hours}h ${minutes} min`
    }

    return (
        <div className='movie-page'>
            {
                movie &&
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <div className="movie-info">
                        {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}
                        <div className="info">
                            <h2>Gêneros</h2>
                            {movie.genres.map((genre) => <span>{genre.name}</span>)}
                        </div>
                        <div className="info">
                            <h2>Duração</h2>
                            <p>{getRuntimeString(movie.runtime)}</p>
                        </div>
                        <div className="info">
                            <h2>Lançamento</h2>
                            <p>{formatDate(movie.release_date)}</p>
                        </div>
                        <div className="info">
                            <h2>Sinopse</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Movie
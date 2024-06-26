import React from 'react'
import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard';
import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {

    const [popularMovies, setPopularMovies] = useState([])
    const [bestMovies, setBestMovies] = useState([])
    const [recentMovies, setRecentMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    const getPopularMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopularMovies(data.results)
    }

    const getBestMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setBestMovies(data.results)
    }

    const getRecentMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setRecentMovies(data.results)
    }

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUpcomingMovies(data.results)
    }


    useEffect(() => {

        const popularURL = `${moviesURL}popular?${apiKey}&language=pt-BR`
        const bestURL = `${moviesURL}top_rated?${apiKey}&language=pt-BR`
        const recentURL = `${moviesURL}now_playing?${apiKey}&language=pt-BR`
        const upcomingURL = `${moviesURL}upcoming?${apiKey}&language=pt-BR`

        getPopularMovies(popularURL)
        getBestMovies(bestURL)
        getRecentMovies(recentURL)
        getUpcomingMovies(upcomingURL)
    }, [])

    return (
        <>
            <div className='container'>
                <h2 className='title'>Filmes Populares</h2>
                <div className="movies-container movies-container-list">
                    {popularMovies.length === 0 && <div className="loading"><p>Carregando...</p></div>}
                    {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
            <div className='container'>
                <h2 className='title'>Melhores Filmes</h2>
                <div className="movies-container movies-container-list">
                    {bestMovies.length === 0 && <div className="loading"><p>Carregando...</p></div>}
                    {bestMovies.length > 0 && bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
            <div className='container'>
                <h2 className='title'>Filmes Recentes</h2>
                <div className="movies-container movies-container-list">
                    {recentMovies.length === 0 && <div className="loading"><p>Carregando...</p></div>}
                    {recentMovies.length > 0 && recentMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
            <div className='container'>
                <h2 className='title'>Em Breve nos Cinemas</h2>
                <div className="movies-container movies-container-list">
                    {upcomingMovies.length === 0 && <div className="loading"><p>Carregando...</p></div>}
                    {upcomingMovies.length > 0 && upcomingMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>
        </>
    )
}

export default Home
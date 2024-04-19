import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../MovieCard";
import styles from './Home.module.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSerachedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
        getSerachedMovies(searchWithQueryURL)
    }, [query])

    return(
        <div className={styles.home}>
            <h2>Resultados para: <span className={styles.query}>{query}</span></h2>
            <div className={styles.container_movies}>
                {movies && movies.map((movie) => <MovieCard estilo='homePage' movie={movie} key={movie.id} />)}
            </div>

        </div>
    )
}
export default Search
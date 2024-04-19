import { useEffect, useState } from "react"
import MovieCard from "../MovieCard"
import styles from './Home.module.css'

function Home() {
    const moviesURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])
    return (
        <div className={styles.home}>
            <h2>Melhores filmes: </h2>
            <div className={styles.container_movies}>
                {topMovies && topMovies.map((movie) => <MovieCard estilo='homePage' movie={movie} key={movie.id} />)}
            </div>

        </div>
    )
}
export default Home
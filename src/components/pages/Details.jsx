import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../MovieCard"
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
import styles from './Details.module.css'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFileEarmarkTextFill } from "react-icons/bs";

function Details() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
        
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])
    
    const formarCurrency = (value) => {
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    function converter(time) {
        let horas = Math.floor(time / 60)
        let minutos = time % 60
        if (horas == 1) {
            return `${horas} hora e ${minutos} minutos`
        }
        return `${horas} horas e ${minutos} minutos`
    }
    return (
        <div className={styles.container}>
            {movie && (
                <>
                    <MovieCard movie={movie} estilo='cardPage' />
                    <span>{movie.tagline}</span>
                    <div className={styles.infos}>
                        <h4><BsWallet2 className={styles.icon}/> Orçamento:</h4>
                        <span>{formarCurrency(movie.budget)}</span>
                    </div>
                    <div className={styles.infos}>
                        <h4><BsGraphUp className={styles.icon}/> Receita:</h4>
                        <span>{formarCurrency(movie.revenue)}</span>
                    </div>
                    <div className={styles.infos}>
                        <h4><BsHourglassSplit className={styles.icon}/> Duração:</h4>
                        <span>{converter(movie.runtime)}</span>
                    </div>
                    <div className={styles.infos}>
                        <h4><BsFileEarmarkTextFill className={styles.icon}/> Descrição:</h4>
                        <span>{movie.overview}</span>
                    </div>
                </>
            )}
        </div>
    )
}
export default Details

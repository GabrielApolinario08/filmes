import { Link} from 'react-router-dom';
import styles from './MovieCard.module.css'
import { FaStar } from "react-icons/fa";
import Details from './pages/Details';

function MovieCard({ movie, showLink = true, estilo }) {
    const imageUrl = import.meta.env.VITE_IMG
    return (
        <div className={`${styles[estilo]} ${styles.card}`}>
            <img src={imageUrl + movie.poster_path} alt="as" />
            <h3>{movie.title}</h3>
            <p><FaStar className={`${styles.fundo_icon} ${styles.icon_star}`} /><span>{movie.vote_average}</span></p>
            {estilo == 'homePage' && (
                <Link to={`/details/${movie.id}`}><button>Detalhes</button></Link>
            )}
            
        </div>
    )
}
export default MovieCard
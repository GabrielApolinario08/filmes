import styles from './NavBar.module.css'
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) {
            return
        }
        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <form className={styles.navBar} onSubmit={handleSubmit}>
            <Link className={styles.link} to='/'><h1><RiMovie2Fill className={styles.fundo_icon}/>Movies</h1></Link>
            <div className={styles.container_search}>
                <input type="text" placeholder='Busque um filme' onChange={(e) => {setSearch(e.target.value)}} value={search}/>
                <button><FaSearch className={styles.fundo_icon}/></button>
            </div>
        </form>
    )
}
export default NavBar
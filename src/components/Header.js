import styles from '../styles/header.module.css'
import Nav from './Nav'

export default function Header() {

    return(
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <h1>BooX - Loyalty Program</h1>
            </div>
            <Nav />
        </header>
    )
}
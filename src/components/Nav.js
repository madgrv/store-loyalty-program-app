import styles from '../styles/nav.module.css'

export default function Nav() {
    
    return(
        <nav className={styles.nav}>
            <ul className={styles.navMenu}>
                <li>Home</li>
                <li>Back</li>
                <li className={styles.logoutButton}>Logout</li>
            </ul>
        </nav>
    )
}
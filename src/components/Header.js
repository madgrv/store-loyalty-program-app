import styles from '../styles/header.module.css'
import Nav from './Nav'

export default function Header() {

    return(
        <div>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>BooX</h1>
                    <h4>Loyalty Program</h4>
                </div>
                <Nav />
            </header>
            <div className={styles.line}></div>
        </div>
    )
}
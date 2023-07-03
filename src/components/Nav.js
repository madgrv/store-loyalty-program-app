import React, { useState, useEffect } from 'react'
import styles from '../styles/nav.module.css'

export default function Nav() {
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false)

    const handleLogin = () => {
        setIsLoggedIn((prevState) => prevState = !prevState)
    }
    
    return(
        <nav className={styles.nav}>
            <ul className={styles.navMenu}>
                <li>Home</li>
                <li>Back</li>
                { isLoggedIn ? 
                    <li className={styles.loginButton} onClick={handleLogin}>Logout</li>
                    :
                    <li className={styles.loginButton} onClick={handleLogin}>Login</li>
                }
                
            </ul>
        </nav>
    )
}
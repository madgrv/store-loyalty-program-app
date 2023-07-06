import React, { useState, useEffect } from 'react'
import styles from '../styles/nav.module.css'
import LoginForm from './LoginForm'

export default function Nav() {
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
    const [ isOpen, setIsOpen ] = React.useState(false);
    const [userName, setUserName] = useState('');


    const toggle = () => setIsOpen(!isOpen);

    const handleLogin = (userInfo) => {
        // setIsLoggedIn((prevState) => prevState = !prevState);
        const response = { userName: userInfo.username };
        setUserName(response.userName);
        setIsLoggedIn(true);
        setIsOpen(!isOpen);
        console.log(userInfo)
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
      };


    
    return(
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <ul className={styles.navMenu}>
                    <li>Home</li>
                    <li>Back</li>
                    { isLoggedIn ? 
                        <li className={styles.loginButton} onClick={handleLogout}>Logout</li>
                        :
                        <li className={styles.loginButton} onClick={toggle}>Login</li>
                    }
                </ul>
            </nav>
            {isLoggedIn ? <p className={styles.userWelcome}>Welcome, {userName}</p>
                :
                <p className={styles.userWelcome}>Please login</p>
            }
            {
                isOpen && (
                    <div className={styles.loginFormWrapper}>
                        <LoginForm handleLogin={handleLogin}/>
                    </div>
                )
            }
    
        </div>
    )
}
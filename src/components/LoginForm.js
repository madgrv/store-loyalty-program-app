import React, { useState, useEffect } from 'react';
import Styles from '../styles/loginForm.module.css';


export default function LoginFormI({handleLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const userInfo = {
            username,
            password
          };

        handleLogin(userInfo);    
    }

    return(
        <div className={Styles.loginFormContainer}>
            <form className={Styles.loginForm}>
                <fieldset className={Styles.loginFieldset}>
                    <div className={Styles.inputField}>
                        {/* <label>User:</label> */}
                        <input 
                            className={Styles.input} 
                            type='text' 
                            placeholder='User name'
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={Styles.inputField}>
                        {/* <label>Password:</label> */}
                        <input 
                            className={Styles.input} 
                            type='password' 
                            placeholder='Password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={Styles.button} onClick={handleClick}>Login</button>
                </fieldset>
            </form>
        </div>
    )
}
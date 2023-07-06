import React, { useState, useEffect } from 'react';
import Styles from '../styles/loginForm.module.css';


export default function LoginFormI({handleLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const userInfo = {
            username,
            password
          };

        handleLogin(userInfo);    
    }


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form input
        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const userInfo = {
            username,
            password
        };
    
        handleLogin(userInfo);

    };



    return(
        <div className={Styles.loginFormContainer}>
            <form className={Styles.loginForm} onSubmit={handleSubmit}>
                <fieldset className={Styles.loginFieldset}>
                    <div className={Styles.inputField}>
                        {/* <label>User:</label> */}
                        <input 
                            className={Styles.input} 
                            type='text'
                            id='username'
                            placeholder='User name'
                            value={username}
                            required
                            onChange={handleUsernameChange}                        />
                    </div>
                    <div className={Styles.inputField}>
                        {/* <label>Password:</label> */}
                        <input 
                            className={Styles.input} 
                            type='password' 
                            id='password'
                            placeholder='Password'
                            value={password}
                            required
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button className={Styles.button}>Login</button>
                </fieldset>
            </form>
        </div>
    )
}
// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Forms.css"
import { useDispatch, useSelector } from 'react-redux';
import { getLogged } from '../redux/action';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login clicked');
        dispatch(getLogged(email, password))
    };
    const storeState = useSelector((state) => state);

    return (
        <div className="container">
            {/* <pre>{JSON.stringify(storeState, null, 2)}</pre> */}
            <h2>Login</h2>
            <form className='signup-form' onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <div>Don't have an account? <Link to="/Signup"> Signup here</Link></div>

        </div>
    );
}

export default Login;

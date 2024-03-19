// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Forms.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login clicked');
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form className='signup-form' onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Don't have an account? Signup here</Link>
        </div>
    );
}

export default Login;

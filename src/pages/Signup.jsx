// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Forms.css"
import { useDispatch } from 'react-redux';
import { getSignup } from '../redux/action';


function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [phone, setPhone] = useState('')
    const [avatar, setavatar] = useState('');
    const dispatch = useDispatch();

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('Signup clicked');
        dispatch(getSignup(name, email, age, phone, gender, dob, avatar, password));
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form className='signup-form' onSubmit={handleSignup}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setgender(e.target.value)} required />
                <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setdob(e.target.value)} required />
                <input type="url" placeholder="Avatar *(link only)" value={avatar} onChange={(e) => setavatar(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
            <div>Already have an account? <Link to="/Login"> Login here</Link></div>

        </div>
    );
}

export default Signup;

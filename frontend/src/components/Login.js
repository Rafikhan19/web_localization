import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const res = await axios.post('http://localhost:3000/api/users/login', user);
            console.log(res.data);
            navigate('/home'); // Redirect to home page upon successful login
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="login-page">
         <div className="Login-tagline">
                <p className="Login-typewriter">Join Us and Break Language Barriers Today.</p>
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        placeholder="Email"
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Password"
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        try {
            await axios.post('http://localhost:3000/api/users/register', newUser);
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000); // Navigate to login after 8 seconds
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="register-page">
            <div className={`register-container ${success ? 'fade-out' : ''}`}>
                <h1>Register</h1>
                {success && <div className="success-message">
                    <div className="tick-mark">✔</div>
                    <div>Successfully Registered!</div>
                </div>}
                {!success && <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={onChange} 
                        placeholder="Name"
                        required 
                    />
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
                    <button type="submit">Register</button>
                    <div className="redirect-link">
                            <p>Have an account? <a href="/login">Login here</a></p>
                        </div>
                </form>}
            </div>
            <div className="tagline">
                <p className="typewriter">Translate Your Website in All Indian Languages!</p>
            </div>
        </div>
    );
};

export default Register;

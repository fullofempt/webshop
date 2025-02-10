import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'dummy-token');
        navigate('/');
    }

    return (
        <div className="auth-form">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Регистрация</button>
            </form>
            <p>Уже есть аккаунт? <Link to="/login">Логин</Link></p>
        </div>
    )
};
export default Register;

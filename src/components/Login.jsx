import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'dummy-token');
        navigate('/');
    }

    return (
        <div className='auth-form'>
            <h2>Логин</h2>
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
                <button type="submit">Логин</button>
            </form>
            <p>Нет аккаунта? <Link to="/register">Регистрация</Link></p>
        </div>
    );
};
export default Login;
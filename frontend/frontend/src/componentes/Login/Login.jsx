import './Login.css';
import Home from "../home/home.jsx";
import { useState } from "react";

const Login = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const data = { username, password };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result.token);
            if (result.token) {
                localStorage.setItem('token', result.token);
                setLoginSuccessful(true);
            } else {
                setLoginSuccessful(false);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <>
            {loginSuccessful ? <Home /> :
                <div className="login-container">
                    <form onSubmit={handleLogin} className="login-form">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingresa tu usuario"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                        />

                        <button type="submit">Login</button>
                    </form>
                </div>
            }
        </>
    );
}

export default Login;

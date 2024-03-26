import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation - checking if username and password are not empty
        if (!username || !password) {
            setError('Please enter both username and password');
        } else {
            // Perform login logic here, e.g., call an API to verify credentials
            // For simplicity, just logging the username and password for now
            console.log('Username:', username);
            console.log('Password:', password);
            // Reset fields and error message
            setUsername('');
            setPassword('');
            setError('');
        }
    };

    return (

        <>

            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;

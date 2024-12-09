import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import DashboardComponent from "./DashboardComponent";
import slugs from "resources/slugs";
import PrivateSection from "routes/PrivateSection";
import '../login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'Mahe' && password === 'Mahe@123') {
      // history.push('./DashboardComponent');
      // implement logic to set username in local storage
      
        localStorage.setItem('username', 'Mahe');
        history.push('./DashboardComponent');  
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div class="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
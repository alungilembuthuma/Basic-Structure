import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../assets/shopping_cart-removebg-preview.png'
import Footer from '../components/Footer'
import ShoppingList from '../components/ShoppingList';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
    } else {
      // Simulate a successful login
      navigate('/ShoppingForm'); // Navigate to shopping list page
    }
  };

  return (
    <div className='Main' style={{ backgroundColor: "#F7B1C9", width: "100vw", height: "100vh", margin: "0", position: "fixed" }}>
      <h1 style={{ fontFamily: "sans", fontSize: "100px", marginLeft: "38%" }}>Login<img src={Cart} style={{width:'100px', marginTop:"4%"}}/></h1>
      <label style={{ fontFamily: 'cursive', fontSize: "40px", marginTop: "2%", marginLeft: "9%" }}>Username:</label>
      <input
        style={{ border: "3px solid black", width: '800px', height: "50px", marginLeft: '11%', fontSize: "30px", position: "fixed" }}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div style={{ marginTop: "5%" }}>
        <label style={{ fontFamily: 'cursive', fontSize: "40px", marginTop: "10%", marginLeft: "9%" }}>Password:</label>
        <input
          style={{ border: "3px solid black", width: '800px', height: "50px", marginLeft: '12%', fontSize: "30px", position: "fixed" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        style={{ fontFamily: "cursive", fontSize: "30px", marginLeft: "40%", marginTop: "5%", padding: "10px 20px", border: "3PX SOLID BLACK", width: "500px" }}
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p style={{ fontFamily: "cursive", fontSize: "20px", marginLeft: "35%" }}>
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>
      <div style={{marginTop:"3%"}}>
        <Footer />
      </div>
    </div>
  );
}
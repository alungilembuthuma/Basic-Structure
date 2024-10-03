import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Cart from '../assets/shopping_cart-removebg-preview.png'

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('User successfully registered!');
        console.log(data);
      })
      .catch((error) => console.error('Error:', error));

    setUsername('');
    setPassword('');
  };

  return (
    <div className="Main" style={{ backgroundColor: "#F7B1C9", width: "100vw", height: "100vh", margin: "0", position: "fixed" }}>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "38%" }}>Register<img src={Cart} style={{width:'100px', marginTop:"4%"}}/></h1>
      <div style={{ width: '800px', margin: '0 auto', padding: '20px' }}>
        <label style={{ fontFamily: 'cursive', fontSize: "40px" }}>Username:</label>
        <input
          style={{ border: "3px solid black", width: '100%', height: "50px", fontSize: "30px" }}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <div style={{ marginTop: "20px" }}>
          <label style={{ fontFamily: 'cursive', fontSize: "40px" }}>Password:</label>
          <input
            style={{ border: "3px solid black", width: '100%', height: "50px", fontSize: "30px" }}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          style={{ fontFamily: 'cursive', fontSize: "30px", backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
          onClick={handleSubmit}
        >
          Register
        </button>
        <p style={{ fontFamily: "cursive", fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
          Already have an account? <Link to="/LoginPage">Login here if already have an account </Link>
        </p>
      </div>
      <div style={{marginTop:"-2%"}}>
      <Footer />
      </div>
    </div>
  );
}
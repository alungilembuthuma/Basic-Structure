import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function LandingPage() {
  return (
    <div  style={{
      backgroundImage: `url(https://img.freepik.com/premium-photo/smartphone-with-shopping-cart-3d-render-style-ai-generated_145713-8401.jpg)`,
      backgroundSize: "100% 100vh", // changed to set both width and height
      width: "100%",
      height: "100vh",
      position: "fixed"
    }}>
       <Navigation/>
     <div style={{marginTop:"-3%"}}>
     <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "33%" }}>Welcome</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "33%" }}>To Your</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "25%" }}>Shopping List</h1>
     </div>
      <Footer/>
    </div>
  )
}
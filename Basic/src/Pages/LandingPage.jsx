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
     <h1 style={{ fontFamily: "sans", fontSize: "70px", marginLeft: "13%" }}>Welcome</h1>
      <h1 style={{ fontFamily: "sans", fontSize: "70px", marginLeft: "13%" }}>To Your</h1>
      <h1 style={{ fontFamily: "sans", fontSize: "70px", marginLeft: "7%" }}>Shopping List</h1>
     </div>
     <div style={{marginTop:"21%"}}>
     <Footer/>
     </div>
     
    </div>
  )
}
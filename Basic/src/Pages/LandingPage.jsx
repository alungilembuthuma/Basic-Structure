import React from 'react'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div style={{backgroundColor: "#48cbff",
        backgroundSize: "100%",
        width: "100%",
        height: "100vh",
        position: "fixed",
        color:"black"}}>
      
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "33%" }}>Welcome</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "42%" }}>To</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "25%" }}>Simply Recipes</h1>
      <Footer/>
    </div>
  )
}

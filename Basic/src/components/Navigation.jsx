import React from 'react'


export default function Navigation() {
  return (
    <nav>
        <ul style={{ display: "flex", color: 'black', fontSize: "30px", marginLeft: "65%", fontFamily: "cursive" }}>
    
          {/* <a href='/Register' style={{ color: 'BLACK', marginRight: "30px" }}>Register</a> */}
          <a href='/LoginPage' style={{ color: 'BLACK', marginLeft: "25%" }}><button style={{marginLeft:"25%", border:"2px solid black", backgroundColor:"Pink", width:"250px", height:"40px"}}>Login</button></a>
        </ul>
      </nav>
  )
}

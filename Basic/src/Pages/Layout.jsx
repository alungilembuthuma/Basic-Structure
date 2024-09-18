import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation/>
     <div style={{minHeight:"95vh"}}><Outlet /></div> 
      <Footer/>
    </>
  )
};

export default Layout;
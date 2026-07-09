import Footer from "../footerComponent/Footer"
import Navbar from "../navComponent/Navbar"
import { Outlet } from 'react-router-dom';
import NavContainer from "../navContainer/NavContainer";

const Layout = () => {
  return (
    <div>
      <NavContainer />
      <div className="hero-section"><Outlet /></div>
      <Footer />
    </div>
  )
}

export default Layout
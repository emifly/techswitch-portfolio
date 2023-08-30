import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <ul className="Navbar">
      <li className="Navbar__Item"><NavLink to="/" className={({isActive}) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Home</NavLink></li>
      <li className="Navbar__Item"><NavLink to="/projects" className={({isActive}) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Projects</NavLink></li>
      <li className="Navbar__Item"><NavLink to="/contact" className={({isActive}) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Contact</NavLink></li>
    </ul>
  )
}

export default Navbar

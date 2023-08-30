import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  )
}

export default Navbar

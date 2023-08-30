import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/busboard">Busboard</NavLink></li>
      <li><NavLink to="/photo-viewer">Photo Viewer</NavLink></li>
    </ul>
  )
}

export default Navbar

import {Link} from "react-router-dom"

export default function Navbar() {
  return <nav className="nav">
    <Link to="/" className="site-title">HabitTrack</Link>
    <ul>
      <li>
        <a href="/login">Login</a>
       </li>
       <li>
        <Link to="/registration">Registration</Link>
      </li>
    </ul>
  </nav>
}


export default function Navbar2() {
  return <nav className="nav">
  <Link to="/" className="site-title">HabitTrack</Link>
  <ul>
    <li>
      <a href="/login">Login</a>
     </li>
     <li>
      <Link to="/registration">Registration</Link>
    </li>
  </ul>
</nav>
}
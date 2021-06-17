import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="content">
                <span className="logo"><Link to="/">Shopp</Link></span>
                <ul className="links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
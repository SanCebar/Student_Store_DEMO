import "./Navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="content">
                <span className="logo">Shopp</span>
                <ul className="links">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}
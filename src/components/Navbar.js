import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="navbar-brand">
                        <a href="/">
                            <h3>Arif's Blog</h3>
                        </a>
                    </div>
                    <div className="nav-link">
                        <Link to="/">Home</Link>
                        <Link to="/create"> <i class="fas fa-plus"></i> New Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

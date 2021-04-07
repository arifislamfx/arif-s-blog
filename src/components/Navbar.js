
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
                        <a href="/">Home</a>
                        <a href="/create">New Blog</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

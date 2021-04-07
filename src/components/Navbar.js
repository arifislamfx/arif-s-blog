
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
                        <a href="/create"> <i class="fas fa-plus"></i> New Blog</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

import { Link } from  "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="create">Create Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;
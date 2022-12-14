import { Link } from "react-router-dom";

const Navbar =  () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            | <Link to="/about">About</Link>
            | <Link to="/members">Members</Link>
            | <Link to="/items">Items</Link>
        </nav>
    )
}

export default Navbar;
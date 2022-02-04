import { Router, Link } from 'react-router-dom';
import { GiSpy } from "react-icons/gi";
import { FaBars } from 'react-icons/fa'



const Navbar = () => {

    return (
        <nav className="navbar">
            <Link to="/"><span className='logo'><GiSpy /> Daniel Bladh</span></Link>
            <button className='hamburger' id='hamburger'>
                <FaBars />
            </button>
            <div className="nav-links" id='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
}

export default Navbar;
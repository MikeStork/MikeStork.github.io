import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <section data-testid='Navbar'>
            <ul>
                <li><Link to="/about">O mnie</Link></li>
                <li><Link to="/">Projekty</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </section>
    )
}

export default Navbar

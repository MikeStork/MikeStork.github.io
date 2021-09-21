import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <section data-testid='Navbar'>
            <ul>
                <li><a href="/about">O mnie</a></li>
                <li><a href="/">Projekty</a></li>
                <li><a href="/contact">Kontakt</a></li>
            </ul>
        </section>
    )
}

export default Navbar

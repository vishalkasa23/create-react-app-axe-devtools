import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => (
    <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-2" >
            <Link className="p-3 h4" to="/">My Mart</Link>
            <Link className="p-3 h4" to="/grocery">Grocery </Link>
            <Link className="p-3 h4" to="/fruitsAndVegetables">Fruits & Vegetables</Link>
            <Link className="p-3 h4" to="/kitchenAppliances" >Kitchen Appliances</Link>
        </nav>
    </header>
)

export default Header;
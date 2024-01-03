import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Navbar = () => {
  return (
    <>

        <nav className='navbar'>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

    <Routes>
        <Route path='/' Component={About}/>
        <Route path='/portfolio' Component={Portfolio}/>
        <Route path='/Blog' Component={Blog}/>
        <Route path='/contact' Component={Contact}/>
    </Routes>

    </>
  );
}

export default Navbar;
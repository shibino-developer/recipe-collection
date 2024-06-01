import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <h1>Recipe Collection</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/favorites"><FaHeart /> Favorites</Link></li>
      <li><Link to="/search"><FaSearch /> Search</Link></li>
    </ul>
  </nav>
);

export default Navbar;

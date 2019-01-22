import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px'
    }}
  >
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evently'
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;

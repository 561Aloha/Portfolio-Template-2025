// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/resume" style={styles.link}>Resume</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/page1" style={styles.link}>Page1</Link>
        </li>
      </ul>
    </nav>
  );
};



export default NavBar;

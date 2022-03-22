import React from 'react';

import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbarContainer}>
        <div>
          <li className={styles.navBarItems}>
            <Link className={styles.navBarLinks} to='/'>
              Home
            </Link>
            <Link className={styles.navBarLinks} to='/'>
              About
            </Link>
            <Link className={styles.navBarLinks} to='/'>
              Contact
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

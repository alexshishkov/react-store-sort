import React from 'react';
import { Link } from 'react-router-dom';
import c from './Header.module.css';

const Header = () => {
  return (
    <div data-testid="header" className={c.header}>
      <Link data-testid="store-link" to="/Store" className={c.pagesName}>
        Store
      </Link>
      <Link data-testid="about-link" to="/AboutUs" className={c.pagesName}>
        About us
      </Link>
      <Link data-testid="page-not-found" to="/404" className={c.pagesName}>
        404
      </Link>
    </div>
  );
};

export default Header;

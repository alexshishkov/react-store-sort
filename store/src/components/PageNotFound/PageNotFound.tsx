import React from 'react';
import { Link } from 'react-router-dom';
import c from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div data-testid="pagenotfound" className={c.wrapper}>
      <div className={c.text}>404</div>
      <div className={c.clickHere}>
        <Link to="/Store" className={c.clickHere__text}>
          Click Here ...
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

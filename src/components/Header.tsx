import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <Link to="/">
        <a className="navbar-brand" href="/#">
          MovieStore
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >

        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">
              <a className="nav-link" href="/#">
                Main page
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about_me">
              <a className="nav-link" href="/#">About me</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;

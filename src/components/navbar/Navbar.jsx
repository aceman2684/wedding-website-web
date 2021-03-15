import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import weddingLogo from '../../assets/svg/wedding-logo.svg';

const links = [
  {
    to: '/',
    name: 'Home',
    exact: true,
  },
  {
    to: '/events',
    name: 'Events',
    disabled: true,
  },
  {
    to: '/rsvp',
    name: 'RSVP',
    disabled: true,

  },
  {
    to: '/accommodations',
    name: 'Accommodations',
    disabled: true,
  },
  {
    to: '/wedding-party',
    name: 'Wedding Party',
    disabled: true,
  },
  {
    to: 'in-loving-memory',
    name: 'In Loving Memory',
    disabled: true,
  },
];

function NavLinkBefore(props) {
  const { index } = props;
  return <i className={`d-none bi-heart-fill text-secondary pe-3 align-middle ${index === 0 ? 'd-none' : 'd-lg-inline-block'}`} style={{ fontSize: '0.5rem' }} />;
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none" href="/">
          <img src={weddingLogo} alt="Wedding Logo" height="50" width="50" className="d-inline-block align-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-lg-auto">
            {
            links.map((link, index) => (
              <li className="nav-item" key={link.name}>
                <NavLink
                  to={link.to}
                  exact={link.exact}
                  aria-current="page"
                  className={`nav-link ${link.disabled ? 'disabled' : ''}`}
                  aria-disabled={link.disabled ? 'true' : 'false'}
                >
                  <NavLinkBefore index={index} />
                  {link.name}
                </NavLink>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavLinkBefore.propTypes = {
  index: PropTypes.number.isRequired,
};

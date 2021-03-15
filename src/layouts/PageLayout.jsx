import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import weddingLogo from '../assets/svg/wedding-logo.svg';

export default function PageLayout(props) {
  const { children } = props;
  return (
    <>
      <div className="d-none d-lg-block vw-100 bg-light py-3 text-center border-bottom">
        <a className="navbar-brand" href="/">
          <img src={weddingLogo} alt="Wedding Logo" height="100" width="100" className="d-inline-block align-top" />
        </a>
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

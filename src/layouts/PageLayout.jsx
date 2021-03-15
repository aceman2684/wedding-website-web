import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Header from '../components/header';

export default function PageLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

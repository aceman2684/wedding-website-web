import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';

function Hero(props) {
  const { children, image } = props;
  return (
    <div className="position-relative overflow-hidden">
      <div className="hero__image-wrapper">
        <img src={image} alt="Hero" className="hero__image" />
      </div>
      <div className="text-white position-absolute bottom-0 text-center w-100 pb-2">
        {children}
      </div>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

Hero.defaultProps = {
  children: <></>,
};

export default Hero;

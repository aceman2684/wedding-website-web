import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

function Hero(props) {
  const { children, image } = props;
  return (
    <div className="position-relative overflow-hidden">
      <img src={image} alt="Hero" className={styles.hero__image} />
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

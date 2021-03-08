import React from 'react';
import PropTypes from 'prop-types';

export default function HeroText(props) {
  const { text, className } = props;
  return (
    <>
      <h1 className={`display-2 d-md-none text-capitalize ${className}`}>{text}</h1>
      <h1 className={`display-1 d-none d-md-block text-capitalize ${className}`}>{text}</h1>
    </>
  );
}

HeroText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HeroText.defaultProps = {
  className: '',
};

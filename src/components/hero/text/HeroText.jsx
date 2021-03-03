import React from 'react';
import PropTypes from 'prop-types';

export default function HeroText(props) {
  const { text } = props;
  return (
    <>
      <h1 className="display-5 d-block d-md-none">
        {text}
      </h1>
      <h1 className="display-4 d-none d-md-block d-lg-none">
        {text}
      </h1>
      <h1 className="display-3 d-none d-lg-block d-xl-none">
        {text}
      </h1>
      <h1 className="display-2 d-none d-xl-block">
        {text}
      </h1>
    </>
  );
}

HeroText.propTypes = {
  text: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

function HeroSubtext(props) {
  const { subtext } = props;
  return (
    <>
      <h1 className="display-6 d-block d-sm-none">
        <small>{ subtext }</small>
      </h1>
      <h1 className="display-6 d-none d-sm-block d-md-none">
        <small>{ subtext }</small>
      </h1>
      <h1 className="display-5 d-none d-md-block d-lg-none">
        <small>{ subtext }</small>
      </h1>
      <h1 className="display-4 d-none d-lg-block d-xl-none">
        <small>{ subtext }</small>
      </h1>
      <h1 className="display-3 d-none d-xl-block">
        <small>{ subtext }</small>
      </h1>
    </>
  );
}

HeroSubtext.propTypes = {
  subtext: PropTypes.string.isRequired,
};

export default HeroSubtext;

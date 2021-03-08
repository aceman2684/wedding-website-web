import React from 'react';
import PropTypes from 'prop-types';

function HeroSubtext(props) {
  const { subtext, className } = props;
  return (
    <>
      <h6 className={`d-md-none text-capitalize ${className}`}>
        { subtext }
      </h6>
      <h5 className={`d-none d-md-block d-lg-none text-capitalize ${className}`}>
        { subtext }
      </h5>
      <h4 className={`d-none d-lg-block d-xl-none text-capitalize ${className}`}>
        { subtext }
      </h4>
      <h3 className={`d-none d-xl-block text-capitalize ${className}`}>
        { subtext }
      </h3>
    </>
  );
}

HeroSubtext.propTypes = {
  subtext: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HeroSubtext.defaultProps = {
  className: '',
};

export default HeroSubtext;

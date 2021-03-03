import React from 'react';
import PropTypes from 'prop-types';

export default function Section(props) {
  const { children, className } = props;
  return (
    <div className="row">
      <div className={`col-xl-10 mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

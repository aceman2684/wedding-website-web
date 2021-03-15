import React from 'react';
import PropTypes from 'prop-types';

function CountdownBox(props) {
  const { time, label } = props;
  return (
    <div className="bg-light text-center col-5 py-3 my-2 col-sm-2 my-sm-0 mx-sm-1">
      <h1 className="text-secondary">{time}</h1>
      <span className="text-capitalize fw-bold">{label}</span>
    </div>
  );
}

CountdownBox.propTypes = {
  time: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CountdownBox;

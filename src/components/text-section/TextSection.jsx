import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section';

export default function TextSection(props) {
  const { title, children } = props;
  return (
    <Section>
      <h1 className="text-center mb-4">{title}</h1>
      <p>
        {children}
      </p>
    </Section>
  );
}

TextSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

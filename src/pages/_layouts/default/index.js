import React from 'react';
import PropTypes from 'prop-types';
import { Default } from './styles';

export default function DefaultLayout({ children }) {
  return <Default>{children}</Default>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    blue: '#2167CB',
    ash: '#767676',
    black: '#000'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: 18,
    medium: 25,
    large: 50,
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

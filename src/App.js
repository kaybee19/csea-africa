import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import appTheme from './util/theme';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

// Component
// import ScrollTop from './components/ScrollTop';
import Navbar from './components/Navbar';
import Body from './components/Body';
// import Text from './components/Text';
// import Footer from './components/Footer';

const theme = createTheme(appTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Body />
        {/*<Text />*/}
        {/*<Footer />*/}
      </Router>
    </ThemeProvider>
  );
}

export default App;
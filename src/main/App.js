import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from '../components/template/Main'
import Routes from './Routes'

import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Main>
            <Routes />
          </Main>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;

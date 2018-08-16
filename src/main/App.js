import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from '../components/template/Main'
import Routes from './Routes'

const theme = createMuiTheme();

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

import React, { Component } from 'react';
import './styles/App.css';
import { ThemeProvider } from 'styled-components';
import { MenuItem, theme, TopNavMenu } from '@tiarebalbi/fortaleza-ui-theme';

import ButtonWrapper from './components/ButtonWrapper';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <div className="App">
          <header className="App-header">
            <TopNavMenu>
              <MenuItem text="Página Inícial" href="/" />
              <MenuItem text="Config." href="/config" />
              <MenuItem icon="user" href="/user" />
            </TopNavMenu>
          </header>
          <div className="App-section">
            <ButtonWrapper />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

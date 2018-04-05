import React, { Component } from 'react';
import './styles/App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '@tiarebalbi/fortaleza-ui-theme';

import ButtonWrapper from './components/ButtonWrapper';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Grupo Fortaleza - UI Kit</h1>
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

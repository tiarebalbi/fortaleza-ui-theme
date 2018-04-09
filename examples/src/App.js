import React from 'react';
import './styles/App.css';
import { ThemeProvider } from 'styled-components';
import { MenuItem, SideNavMenu, theme, TopNavMenu } from '@tiarebalbi/fortaleza-ui-theme';
import { Col, Row } from 'react-styled-flexboxgrid';

import ButtonWrapper from './components/ButtonWrapper';

const App = () => (
  <ThemeProvider theme={ theme }>
    <div className="App">
      <Row>
        <Col xs>
          <TopNavMenu>
            <MenuItem text="Página Inícial" href="/" />
            <MenuItem text="Config." href="/config" />
            <MenuItem icon="user" href="/user" />
          </TopNavMenu>
        </Col>
      </Row>
      <Row top="xs">
        <Col xs={ 2 } md={ 1 }>
          <SideNavMenu>
            <MenuItem icon="home" text="Home" href="/" />
            <MenuItem icon="user" text="Usuários" href="/" />
            <MenuItem icon="api" text="Clientes" href="/" />
            <MenuItem icon="usergroup-add" text="Funcionários" href="/" />
          </SideNavMenu>
        </Col>
        <Col xs={ 10 } md={ 11 }>
          <ButtonWrapper />
        </Col>
      </Row>
    </div>
  </ThemeProvider>
);

export default App;

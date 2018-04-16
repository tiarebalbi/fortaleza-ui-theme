import React from 'react';
import {
  MenuItem,
  SideNavMenu,
  TopNavMenu,
  PageSubMenu,
  Layout,
  Content,
} from '@tiarebalbi/fortaleza-ui-theme';

import ButtonWrapper from './components/ButtonWrapper';

const link = {
  name: 'Voltar',
  link: '/',
};

const App = () => (
  <Layout>
    <TopNavMenu>
      <MenuItem text="Página Inícial" href="/"/>
      <MenuItem text="Config." href="/config"/>
      <MenuItem icon="user" href="/user"/>
    </TopNavMenu>
    <SideNavMenu>
      <MenuItem icon="home" text="Home" href="/"/>
      <MenuItem icon="user" text="Usuários" href="/"/>
      <MenuItem icon="api" text="Clientes" href="/"/>
      <MenuItem icon="usergroup-add" text="Funcionários" href="/"/>
    </SideNavMenu>
    <Content>
      <PageSubMenu title="Página Inícial" link={link}>
        <a href="/">Option 1</a>
        <a href="/">Option 2</a>
        <a href="/">Option 3</a>
      </PageSubMenu>
      <ButtonWrapper/>
    </Content>
  </Layout>
);

export default App;

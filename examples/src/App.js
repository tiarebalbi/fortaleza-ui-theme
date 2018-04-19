import React from 'react';
import {
  MenuItem,
  SideNavMenu,
  TopNavMenu,
  PageSubMenu,
  Layout,
  Content,
  Table,
} from '@tiarebalbi/fortaleza-ui-theme';

import ButtonWrapper from './components/ButtonWrapper';
import ContentWrapper from './components/ContentWrapper';

const link = {
  name: 'Voltar',
  link: '/',
};


const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

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
        <a href="#botoes">Botões</a>
        <a href="#tabela">Tabela</a>
      </PageSubMenu>
      <div className="details">

        <ContentWrapper title="Botões" id="botoes">
          <ButtonWrapper/>
        </ContentWrapper>

        <ContentWrapper title="Tabela" id="tabela">
          <Table title={() => 'Custom title'} size="small" columns={columns} dataSource={data}/>
        </ContentWrapper>
      </div>
    </Content>
  </Layout>
);

export default App;

import React from 'react';
import styled from 'styled-components';
import { PageWrapper, Button } from '@tiarebalbi/fortaleza-ui-theme';

const Content = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
`;

const ContentWrapper = (props) => (
  <Content>
    <PageWrapper id={props.id} title={props.title}>
      <Button onClick={() => console.log('clicked')}>Refresh</Button>
    </PageWrapper>
    {props.children}
  </Content>
);

export default ContentWrapper;
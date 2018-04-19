import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  
  border-bottom: 1px solid #e5e5e5;
  h1 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 15px;
  }
`;

const ContentWrapper = (props) => (
  <Content>
    <h1 id={props.id}>{props.title}</h1>
    {props.children}
  </Content>
);

export default ContentWrapper;
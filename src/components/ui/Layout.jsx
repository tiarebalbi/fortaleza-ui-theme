// @flow

import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { ContentType, LayoutType } from '../../types';

import { theme, media } from '../../themes';

const ContentStyle = styled.div`
  left: 0;
  margin-left: 110px;
  padding-top: 65px;
  position: relative;

  .details {
    margin-left: 280px;
    margin-top: 20px;
    margin-right: 30px;
  }

  ${media.tablet`
     margin-left: 90px;
     
    .details { 
      margin-left: 210px;
    }
  `};
`;

export const Content = (props: ContentType) => (
  <ContentStyle>{props.children}</ContentStyle>
);

const MobileBlocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 30px;
  text-align: center;
  font-size: 30px;
  z-index: -5000;
  visibility: hidden;
  display: none;
  background: #333;
  color: #fff;

  ${media.phone`
    z-index: 5000;
    visibility: visible;
    display: block;
  `};
`;

const Wrapper = styled.div`
  background: #f2f9ff;
  height: 100%;
`;

export const Layout = (props: LayoutType) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <MobileBlocker>
        Este sistema não suporta acesso via celular.
      </MobileBlocker>
      {props.children}
    </Wrapper>
  </ThemeProvider>
);

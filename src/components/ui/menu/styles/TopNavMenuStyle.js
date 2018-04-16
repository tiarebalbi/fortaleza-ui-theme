// @flow

import styled from 'styled-components';
import { media } from '../../../../themes/utils';
import { palette } from 'styled-theme';

export const StyledMenu = styled.header`
  background: ${palette(1, 'white')};
  border: 0 solid ${palette(0, 'white')};
  color: ${palette(0, 'primary')};
  font-size: 12px;
  padding: 10px 20px;
  height: 65px;
  box-shadow: 0 0.2rem 3.4rem 0 rgba(74, 74, 74, 0.35);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;
  ${media.phone`min-height: 61px;`};

  nav {
    i.anticon.mobile-icon {
      text-align: right;
      font-size: 18px;
      display: none;
      color: ${palette(0, 'primary')};
      ${media.phone`display: inline;`};
    }
    .toggle {
      float: right;
      width: 18px;
      height: 18px;
    }
    .options {
      text-align: right;
      display: block;
      ${media.phone`
        &.closed { display: none; }
        &.open { display: block; }
      `} a {
        display: inline-block;
        color: ${palette(0, 'primary')};
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
`;

export const StyledLogo = styled.div`
  text-align: left;

  .full {
    height: 45px;
    visibility: visible;
  }
  .compact {
    display: none;
    height: 41px;
    visibility: hidden;
  }
  ${media.phone`
    .full { visibility: hidden; display: none; }
    .compact { visibility: visible; display: initial; }
  `};
`;

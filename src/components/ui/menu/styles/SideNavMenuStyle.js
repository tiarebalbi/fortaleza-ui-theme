// @flow

import styled from 'styled-components';
import { palette } from 'styled-theme';
import { media } from '../../../../themes/utils';

export const StyledSideNav = styled.nav`
  background: ${palette(0, 'primary')};
  box-shadow: 0 0.2rem 3.4rem 0 rgba(25, 75, 134, 0.25);
  color: ${palette(4, 'primary')};
  bottom: 0;
  margin-top: 0;
  position: fixed;
  left: 0;
  top: 65px;
  width: 110px;
  z-index: 220;
  ${media.tablet`
    width: 90px;
  `};

  a {
    margin-bottom: 1.5rem;
    margin-left: 0.5rem;

    i.anticon {
      display: block;
      color: ${palette(4, 'primary')};
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    span {
      color: ${palette(4, 'primary')};
      text-align: center;
      display: block;
      ${media.phone`display: none;`};
    }
  }
`;

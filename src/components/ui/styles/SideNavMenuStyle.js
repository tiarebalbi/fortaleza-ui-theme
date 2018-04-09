// @flow

import styled from 'styled-components';
import { palette } from 'styled-theme';
import { media } from '../../../themes/utils';

export const StyledSideNav = styled.nav`
  align-items: center;
  background: ${palette(0, 'primary')};
  box-shadow: 0 0.2rem 3.4rem 0 rgba(25, 75, 134, 0.25);
  color: ${palette(4, 'primary')};
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  pointer-events: all;
  height: 100vh;
  padding-top: 6rem;

  a {
    margin-bottom: 1.5rem;

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

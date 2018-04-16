// @flow

import styled from 'styled-components';
import background from '../../../../assets/sidenav-background.svg';
import { media } from '../../../../themes/utils';
import { palette } from 'styled-theme';

const PageSubMenuStyle = styled.div`
  background: url(${background}) #f9f9fc center top no-repeat;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
  width: 258px;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 110px;
  padding-top: 65px;

  ${media.tablet`
    left:90px;
    width: 190px;
  `};

  .title-content {
    background: rgba(255, 255, 255, 0.89);
    border-radius: 1.2rem;
    box-shadow: 0 0.2rem 3.4rem 0 rgba(39, 52, 125, 0.25);
    color: ${palette(0, 'primary')};
    padding: 1.5rem;
    margin: 20px 10px 70px;

    h1 {
      color: ${palette(0, 'primary')};
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 11px;
      color: ${palette(0, 'grayscale')};
    }

    button {
      display: block;
      width: 100%;
    }
  }
`;

export default PageSubMenuStyle;

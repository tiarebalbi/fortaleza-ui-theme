// @flow

import styled from 'styled-components';
import background from '../../../../assets/sidenav-background.svg';
import { media } from '../../../../themes/utils';
import { palette } from 'styled-theme';

const PageSubMenuStyle = styled.div`
  background: url(${background}) #f9f9fc center top no-repeat;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
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
    border-radius: 12px;
    box-shadow: 0 2px 34px 0 rgba(39, 52, 125, 0.25);
    color: ${palette(0, 'primary')};
    padding: 15px;
    margin: 20px 10px 70px;

    h1 {
      color: ${palette(0, 'primary')};
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      margin-bottom: 5px;
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
  .options {
    a {
      border-bottom: solid 1px #d9daeb;
      color: ${palette(0, 'primary')} !important;
      cursor: pointer;
      display: block;
      height: 35px;
      line-height: 35px;
      padding-left: 15px;
      font-size: 14px;

      &:hover {
        color: ${palette(0, 'secondary')} !important;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;

export default PageSubMenuStyle;

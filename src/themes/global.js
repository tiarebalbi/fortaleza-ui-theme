// @flow

import reset from 'styled-reset';
import { injectGlobal } from 'styled-components';
import { palette } from 'styled-theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  ${reset}
  
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
    color: ${palette(0)};
    font-size: 14px;
    font-family: 'Roboto', sans-serif !important;
  }
  
  #root {
    height: 100%;
  }
`;

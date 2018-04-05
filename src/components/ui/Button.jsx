// @flow

import * as React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Button as AntDButton } from 'antd';

import type { ButtonType } from '../../types';

const StyledButton = styled(AntDButton)`
  background: ${props => palette(0, props.palette)} !important;
  color: ${props => palette(4, props.palette)} !important;
  border-color: ${props => palette(0, props.palette)} !important;
  &:hover {
    background: ${props => palette(1, props.palette)} !important;
    color: ${props => palette(4, props.palette)} !important;
    border-color: ${props => palette(1, props.palette)} !important;
  }
  &:disabled {
    background: #f5f5f5 !important;
    color: rgba(0, 0, 0, 0.25) !important;
    border-color: #d9d9d9 !important;
  }
`;

StyledButton.defaultProps = {
  palette: 'primary',
};

const Button = (props: ButtonType) => (
  <StyledButton { ...props }>
    { props.children }
  </StyledButton>
);

export default Button;

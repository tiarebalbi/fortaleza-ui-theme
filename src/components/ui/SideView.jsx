// @flow

import * as React from 'react';
import { Icon } from 'antd';
import { palette } from 'styled-theme';
import type { SideViewType } from '../../types';
import SideViewStyle from './styles/SideViewStyle';

const SideView = (props: SideViewType) => {
  const { title, component: Component, close }: SideViewType = props;
  return (
    <SideViewStyle>
      <div className="container">
        <div className="space" onClick={close} />
        <div className="content">
          <header>
            <h1>{title}</h1>
            <a onClick={close}>
              <Icon type="close-circle" />
            </a>
          </header>
          <div className="component">
            <Component {...props} />
          </div>
        </div>
      </div>
    </SideViewStyle>
  );
};

export default SideView;

// @flow
import * as React from 'react';
import cx from 'classnames';
import { Icon } from 'antd';

import logo from '../../../assets/logo-icon.svg';
import logoCompact from '../../../assets/app-icon.svg';

import type { ToggleMenuState, MenuContentType } from '../../../types';

import { StyledLogo, StyledMenu } from './styles/TopNavMenuStyle';

const Logo = () => (
  <StyledLogo>
    <img src={logo} className="full" alt="QualitySoft" />
    <img src={logoCompact} className="compact" alt="QualitySoft" />
  </StyledLogo>
);

class TopNavMenu extends React.Component<MenuContentType, ToggleMenuState> {
  state = {
    open: false,
  };

  toggle = () => {
    const { open: isOpen } = this.state;
    this.setState({ open: !isOpen });
  };

  render() {
    const { children } = this.props;
    const { open: isOpen } = this.state;
    return (
      <StyledMenu>
        <Logo />
        <nav>
          <a onClick={this.toggle} className="toggle">
            <Icon type="appstore-o" className="mobile-icon" />
          </a>
          <div
            className={cx('options', {
              open: isOpen,
              closed: !isOpen,
            })}
          >
            {children}
          </div>
        </nav>
      </StyledMenu>
    );
  }
}

export default TopNavMenu;

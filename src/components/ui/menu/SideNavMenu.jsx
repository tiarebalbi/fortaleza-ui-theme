// @flow

import * as React from 'react';
import type { MenuContentType } from '../../../types';

import { StyledSideNav } from './styles/SideNavMenuStyle';

const SideNavMenu = (props: MenuContentType) => (
  <StyledSideNav>{props.children}</StyledSideNav>
);

export default SideNavMenu;

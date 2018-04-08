// @flow
import * as React from 'react';
import { Icon } from 'antd';

import type { MenuItemType } from '../../types';

const MenuItem = ({ icon, text, href, ref }: MenuItemType) => (
  <a href={href} ref={ref}>
    {icon && <Icon type={icon} />}
    {text && <span>{text}</span>}
  </a>
);

export default MenuItem;

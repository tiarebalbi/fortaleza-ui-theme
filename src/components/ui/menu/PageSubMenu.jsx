// @flow
import * as React from 'react';
import type { PageSubMenuType } from '../../../types';

import Button from '../Button';
import PageSubMenuStyle from './styles/PageSubMenuStyle';

export default class PageSubMenu extends React.PureComponent<PageSubMenuType> {
  render() {
    const { title, description, link, children } = this.props;

    return (
      <PageSubMenuStyle>
        <div className="title-content">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {link && (
            <Button
              className="btn-sub-menu-page"
              palette="secondary"
              href={link.href}
              icon={link.icon}
            >
              {link.name}
            </Button>
          )}
        </div>
        <div className="options">{children}</div>
      </PageSubMenuStyle>
    );
  }
}

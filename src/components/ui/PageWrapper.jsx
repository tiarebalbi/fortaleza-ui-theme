// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { PageWrapperType } from '../../types';

const Style = styled.div`
  padding-bottom: 20px;

  h1 {
    color: #4a4a4a;
    font-size: 20px;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 12px;
    font-weight: normal;
  }

  .wrapper-content {
    background: rgba(255, 255, 255, 0.89);
    border-radius: 6px;
    box-shadow: 0 1px 10px 0 rgba(39, 52, 125, 0.1);
    padding: 12px;
    height: 56px;

    a,
    button {
      float: left;
      margin-right: 10px;
    }

    a.right,
    button.right {
      float: right;
      margin-left: 10px;
    }
  }
`;

const PageWrapper = (props: PageWrapperType) => (
  <Style>
    <h1>{props.title}</h1>
    {props.description && <p>{props.description}</p>}
    {props.children && <div className="wrapper-content">{props.children}</div>}
  </Style>
);

export default PageWrapper;

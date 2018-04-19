// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Table as AntDTable } from 'antd';
import { palette } from 'styled-theme';

import type { TableProps } from '../../types';

const TableStyle = styled(AntDTable)`
  .ant-table-tbody {
    background: #ffffff;
  }

  .ant-table-body {
    table {
      padding: 0 !important;
    }
  }

  .ant-table-title {
    background: ${palette(0, 'primary')};
    color: #ffffff;
  }

  .ant-table-thead > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-thead > tr:hover > td,
  .ant-table-tbody > tr:hover > td {
    background: #ffedd0;
  }
`;

const Table = (props: TableProps<any>) => <TableStyle {...props} />;

Table.defaultProps = {
  size: 'small',
};

export default Table;

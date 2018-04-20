// @flow
import * as React from 'react';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';
export type FormType = {
  layout: FormLayout,
};

export type ButtonType = {
  palette?: string,
  size?: string,
  disabled?: boolean,
  loading?: boolean,
  icon?: string,
  href?: string,
  onClick?: () => void,
  children?: React.Node,
};
export type Link = {
  name: string,
  href: string,
  icon?: string,
};

export type PageSubMenuType = {
  title: string,
  description?: string,
  link?: Link,
  children?: React.Node,
};

export type ToggleMenuState = {
  open: boolean,
};

export type MenuContentType = {
  children?: React.Node,
};

export type MenuItemType = {
  icon?: string,
  text?: string,
  ref?: string,
  href: string,
};

export type Tone = string;
export type Tones = Array<Tone>;
export type Font = string;
export type Size = string;
export type Palette = { [string]: Tones };
export type Fonts = { [string]: Font };
export type Sizes = { [string]: Size };
export type Theme = {
  palette?: Palette,
  reversePalette?: Palette,
  fonts?: Fonts,
  sizes?: Sizes,
};

export type TopType = {
  children?: React.Node,
};

export type LeftSideType = {
  children?: React.Node,
};

export type RightSideType = {
  children?: React.Node,
};

export type ContentType = {
  children?: React.Node,
};

export type LayoutType = {
  children?: React.Node,
};

export interface PaginationProps {
  current?: number;
  defaultCurrent?: number;
  total: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  showSizeChanger?: boolean;
  pageSizeOptions?: Array<string>;
  onShowSizeChange?: (current: number, size: number) => void;
  showQuickJumper?: boolean;
  size?: string;
  simple?: Object;
  showTotal?: (total: number) => React.Node;
  style?: Object;
  className?: string;
  locale?: Object;
  prefixCls?: string;
  selectPrefixCls?: string;
}

export interface ColumnProps<T> {
  title?: React.Node;
  key?: string;
  dataIndex?: string;
  render?: (text: any, record: T, index: number) => React.Node;
  filters?: { text: string, value: string }[];
  onFilter?: (value: any, record: T) => boolean;
  filterMultiple?: boolean;
  filterDropdown?: React.Node;
  sorter?: boolean | ((a: any, b: any) => number);
  colSpan?: number;
  width?: string | number;
  className?: string;
  fixed?: boolean | ('left' | 'right');
  filteredValue?: any[];
  sortOrder?: boolean | ('ascend' | 'descend');
}

export type TableRowSelection<T> = {
  type?: 'checkbox' | 'radio',
  selectedRowKeys?: string[],
  onChange?: (selectedRowKeys: string[], selectedRows: Object[]) => any,
  getCheckboxProps?: (record: T) => Object,
  onSelect?: (record: T, selected: boolean, selectedRows: Object[]) => any,
  onSelectAll?: (
    selected: boolean,
    selectedRows: Object[],
    changeRows: Object[],
  ) => any,
};

export type TableProps<T> = {
  prefixCls?: string,
  dropdownPrefixCls?: string,
  rowSelection?: TableRowSelection<T>,
  pagination?: PaginationProps | boolean,
  size?: 'default' | 'middle' | 'small',
  dataSource?: T[],
  columns?: ColumnProps<T>[],
  rowKey?: string | ((record: T, index: number) => string),
  rowClassName?: (record: T, index: number) => string,
  expandedRowRender?: any,
  defaultExpandedRowKeys?: string[],
  expandedRowKeys?: string[],
  expandIconAsCell?: boolean,
  expandIconColumnIndex?: number,
  onChange?: (
    pagination: PaginationProps | boolean,
    filters: string[],
    sorter: Object,
  ) => any,
  loading?: boolean,
  locale?: Object,
  indentSize?: number,
  onRowClick?: (record: T, index: number) => any,
  useFixedHeader?: boolean,
  bordered?: boolean,
  showHeader?: boolean,
  footer?: (currentPageData: Object[]) => React.Node,
  title?: (currentPageData: Object[]) => React.Node,
  scroll?: { x?: boolean | number, y?: boolean | number },
  childrenColumnName?: string,
  bodyStyle?: Object,
  className?: string,
  style?: Object,
};

export type SideViewType = {
  close: () => void,
  component: any,
  title: string,
};

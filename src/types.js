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

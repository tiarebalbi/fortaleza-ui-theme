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

export type TopNavMenuType = {
  children?: React.Node,
};
export type TopNavMenuState = {
  open: boolean,
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

// @flow

import { reversePalette } from 'styled-theme/composer';

import type { Theme } from '../types.js';
import './global';

const theme: Theme = {};

theme.palette = {
  primary: ['#114582', '#26558D', '#6788AF', '#92AAC6', '#BECCDC'],
  secondary: ['#FF9900', '#FFAB2E', '#FFBE5C', '#FFD08B', '#FFE3B9'],
  danger: ['#D0021B', '#D83044', '#E15E6D', '#E98C97', '#F2BAC0'],
  alert: ['#E4CC37', '#E8D55B', '#EDDE7F', '#F0E391', '#F5ECB6'],
  success: ['#8FC93A', '#A3D25D', '#B7DC81', '#C1E193', '#D6EBB7'],
  white: ['#fff'],
  grayscale: ['#38383D', '#6F707A', '#CACDDF', '#D3D6E4', '#EBECF3'],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default theme;

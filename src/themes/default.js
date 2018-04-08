// @flow

import { reversePalette } from 'styled-theme/composer';

import type { Theme } from '../types.js';
import './global';

const theme: Theme = {};

theme.palette = {
  primary: ['#073B4C', '#345F71', '#5C8699', '#84AFC3', '#AED9EF'],
  secondary: ['#118AB2', '#006F95', '#00557A', '#003C5F', '#002545'],
  danger: ['#EF476F', '#CC1F54', '#A9003A', '#870023', '#650009'],
  alert: ['#FFD166', '#CBA238', '#997600', '#694D00', '#412600'],
  success: ['#06D6A0', '#00AB78', '#008153', '#005930', '#00340F'],
  white: ['#fff', '#F9F9FC', '#919191', '#5E5E5E', '#303030'],
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

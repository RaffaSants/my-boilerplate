import { ReactNode } from 'react';
import * as layoutTypes from '@/types/layout';
import * as themeTypes from '@/types/theme';

export type variant = 'header' | 'main' | 'aside' | 'footer';

export interface containerFlex {
  direction?: layoutTypes.direction;
  wrap?: 'nowwrap' | 'wrap' | 'wrap-reverse';
}

export interface containerGrid {
  columns?: layoutTypes.columns;
  templatecolumns?: string;
  rows?: layoutTypes.rows;
  templaterows?: string;
}

export interface containerStyleProps {
  position?: layoutTypes.position;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  alignx?: layoutTypes.alignX;
  aligny?: layoutTypes.alignY;
  height?: string;
  minheight?: string;
  maxheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  bgcolor?: keyof themeTypes.colorsBase | string;
  fontcolor?: keyof themeTypes.colors | string;
  margin?: string;
  padding?: string;
  gap?: string;
  zindex?: number;
}

export interface containerProps
  extends containerStyleProps,
    containerFlex,
    containerGrid {
  variant: variant;
  display: layoutTypes.display;
  children?: ReactNode;
}

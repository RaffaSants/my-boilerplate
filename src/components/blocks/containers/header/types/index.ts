import { HtmlHTMLAttributes, ReactNode } from 'react';
import { containerFlex, containerGrid, containerStyleProps } from '../../types';

export interface headerFlex
  extends containerFlex,
    containerStyleProps,
    HtmlHTMLAttributes<HTMLHeadElement> {
  children?: ReactNode;
}

export interface headerGrid
  extends containerGrid,
    containerStyleProps,
    HtmlHTMLAttributes<HTMLHeadElement> {
  children?: ReactNode;
}

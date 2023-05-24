import { ReactNode } from 'react';
import { containerStyleProps, containerFlex, containerGrid } from '../../types';

export interface sideFlex extends containerFlex, containerStyleProps {
  children: ReactNode;
}

export interface sideGrid extends containerGrid, containerStyleProps {
  children: ReactNode;
}

import { ReactNode } from 'react';
import { containerFlex, containerGrid, containerStyleProps } from '../../types';

export interface mainFlex extends containerFlex, containerStyleProps {
  children: ReactNode;
}

export interface mainGrid extends containerGrid, containerStyleProps {
  children: ReactNode;
}

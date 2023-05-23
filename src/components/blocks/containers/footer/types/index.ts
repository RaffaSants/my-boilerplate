import { ReactNode } from "react";
import { containerFlex, containerGrid, containerStyleProps } from "../../types";

export interface footerFlex extends containerFlex, containerStyleProps {
  children: ReactNode
}

export interface footerGrid extends containerGrid, containerStyleProps {
  children: ReactNode
}
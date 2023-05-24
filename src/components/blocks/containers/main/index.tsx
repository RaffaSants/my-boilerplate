import { ContainerStyle } from '../style';
import { mainFlex, mainGrid } from './types';

export const MainFlex = ({ children, ...rest }: mainFlex) => {
  return (
    <ContainerStyle variant="main" display="flex" {...rest}>
      {children}
    </ContainerStyle>
  );
};

export const MainGrid = ({ children, ...rest }: mainGrid) => {
  return (
    <ContainerStyle variant="main" display="grid" {...rest}>
      {children}
    </ContainerStyle>
  );
};

import { ContainerStyle } from '../style';
import { headerFlex, headerGrid } from './types';

export const HeaderFlex = ({ children, ...rest }: headerFlex) => {
  return (
    <ContainerStyle variant="header" display="flex" direction="row" {...rest}>
      {children}
    </ContainerStyle>
  );
};

export const HeaderGrid = ({ children, ...rest }: headerGrid) => {
  return (
    <ContainerStyle variant="header" display="grid" {...rest}>
      {children}
    </ContainerStyle>
  );
};

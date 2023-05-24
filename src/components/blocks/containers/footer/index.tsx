import { ContainerStyle } from '../style';
import { footerFlex, footerGrid } from './types';

export const FooterFlex = ({ children, ...rest }: footerFlex) => {
  return (
    <ContainerStyle variant="footer" display="flex" direction="row" {...rest}>
      {children}
    </ContainerStyle>
  );
};

export const FooterGrid = ({ children, ...rest }: footerGrid) => {
  return (
    <ContainerStyle variant="footer" display="grid" {...rest}>
      {children}
    </ContainerStyle>
  );
};

import { ContainerStyle } from "../style";
import { sideFlex, sideGrid } from "./types";

export const SideFlex = ({children, ...rest}:sideFlex)=>{
  return(
    <ContainerStyle variant='aside' display='flex' direction='column' {...rest}>
      {children}
    </ContainerStyle>
  )
}

export const SideGrid = ({children, ...rest}:sideGrid)=>{
  return(
    <ContainerStyle variant='aside' display='grid' {...rest}>
      {children}
    </ContainerStyle>
  )
}
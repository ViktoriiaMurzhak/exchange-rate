import styled from 'styled-components'
import { breakpoints } from '../../helpers/variables'

export const ContainerStyled = styled.div`
  width: 100%;

  margin: 0px auto;
  padding: 0px 20px;
  min-width: 320px;
  max-width: 480px;

  @media ${breakpoints.minTablet} {
    padding: 0px 32px;
    max-width: 768px;
  }
  @media ${breakpoints.desktop} {
    max-width: 1280px;
  }
`
